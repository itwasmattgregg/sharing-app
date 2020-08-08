import gql from 'graphql-tag'

export const schema = gql`
  type Item {
    id: Int!
    title: String!
    description: String!
    visible: Boolean!
    owner: User!
    ownerId: Int!
    borrower: User
    borrowerId: Int
  }

  type Query {
    items: [Item!]!
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
    checkoutItem(id: Int!): Item!
  }
`
