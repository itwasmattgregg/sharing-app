import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    createdAt: DateTime!
    itemsOwned: [Item]!
    itemsBorrowed: [Item]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }
`
