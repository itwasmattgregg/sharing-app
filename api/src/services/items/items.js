import { context } from '@redwoodjs/api/dist/globalContext'

import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const items = () => {
  return db.item.findMany()
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
      borrowerId: db.user.findOne({
        where: { email: context.currentUser.email },
      }).id,
    },
    where: { id },
  })
}
