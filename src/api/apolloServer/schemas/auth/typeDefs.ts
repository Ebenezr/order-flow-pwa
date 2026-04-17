import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    getUser: User
  }

  type Mutation {
    signIn(username: String!, password: String!): SignInResponse
  }

  type User {
    username: String
    email: String
  }

  type SignInResponse {
    status: String
    message: String
  }
`;

export default typeDefs;
