import { gql } from "@apollo/client/core";

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      status
      message
    }
  }
`;
