import { context } from '@redwoodjs/api/dist/globalContext'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const items = () => {
  return db.item.findMany()
}

export const myItems = () => {
  return db.item.findMany({
    where: {
      owner: context.currentUser,
    },
  })
}

export const item = ({ id }) => {
  return db.item.findOne({
    where: { id },
  })
}

export const createItem = ({ input }) => {
  requireAuth()
  const data = {
    ...input,
    owner: { connect: { email: context.currentUser.email } },
  }
  return db.item.create({
    data,
  })
}

export const updateItem = ({ id, input }) => {
  requireAuth()
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const deleteItem = ({ id }) => {
  requireAuth()
  return db.item.delete({
    where: { id },
  })
}

export const Item = {
  owner: (_obj, { root }) =>
    db.item.findOne({ where: { id: root.id } }).owner(),
  borrower: (_obj, { root }) =>
    db.item.findOne({ where: { id: root.id } }).borrower(),
}

export const checkoutItem = ({ id }) => {
  requireAuth()
  return db.item.update({
    data: {
      borrowedAt: Date.now(),
      borrower: { connect: { email: context.currentUser.email } },
    },
    where: { id },
  })
}
