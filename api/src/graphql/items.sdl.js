import gql from 'graphql-tag'

export const schema = gql`
  type Item {
    id: Int!
    title: String!
    description: String!
    visible: Boolean!
    createdAt: DateTime!
    owner: User!
    ownerId: Int!
    borrower: User
    borrowerId: Int
    borrowedAt: DateTime
    checkedOut: Boolean!
  }

  type Query {
    items: [Item!]!
    myItems: [Item!]!
    item(id: Int!): Item!
  }

  input CreateItemInput {
    title: String!
    description: String!
    visible: Boolean!
  }

  input UpdateItemInput {
    title: String
    description: String
    visible: Boolean
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
    checkoutItem(id: Int!): Item!
  }
`
