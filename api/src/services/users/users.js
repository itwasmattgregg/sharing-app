import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const User = {
  itemsOwned: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).itemsOwned(),
  itemsBorrowed: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).itemsBorrowed(),
}
