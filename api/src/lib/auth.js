// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

import { AuthenticationError } from '@redwoodjs/api'

import { db } from './db'

export const getCurrentUser = async ({ email, user_metadata }) => {
  const fullName = user_metadata.full_name

  const user =
    (await db.user.findOne({ where: { email } })) ||
    (await createUser(fullName.trim(), email))

  return user
}

const createUser = (name, email) => {
  return db.user.create({ data: { name, email } })
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
