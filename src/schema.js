const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    userId: ID!
    title: String!
    body: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    avatar: String
  }

  type Meta {
    page: Int!
    perPage: Int!
    total: Int!
  }

  type UsersRespone {
    data: [User!]!
    meta: Meta
  }

  type Query {
    posts: [Post!]!
    users(page: Int!): UsersRespone!
  }
`;
