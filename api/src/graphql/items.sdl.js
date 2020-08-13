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
  }

  type Query {
    items: [Item!]!
    item(id: Int!): Item!
  }

  input CreateItemInput {
    title: String!
    description: String!
    visible: Boolean!
    ownerId: Int!
    borrowerId: Int
  }

  input UpdateItemInput {
    title: String
    description: String
    visible: Boolean
    ownerId: Int
    borrowerId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
    checkoutItem(id: Int!): Item!
  }
`
