import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const items = () => {
  return db.item.findMany()
}

export const item = ({ id }) => {
  return db.item.findOne({
    where: { id },
  })
}

export const createItem = ({ input }) => {
  const { ownerId, borrowerId, ...localFields } = input
  let data = {
    ...localFields,
    owner: { connect: { id: ownerId } },
  }
  if (borrowerId) {
    data = {
      ...data,
      borrower: { connect: { id: borrowerId } },
    }
  }
  return db.item.create({
    data,
  })
}

export const updateItem = ({ id, input }) => {
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const deleteItem = ({ id }) => {
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
      borrower: db.user.findOne({
        where: { email: context.currentUser.email },
      }),
    },
    where: { id },
  })
}
