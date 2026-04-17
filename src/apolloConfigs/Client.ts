import { ApolloClient } from "@apollo/client/core";
import { createHttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";
import { ErrorLink } from "@apollo/client/link/error";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import fetch from "cross-fetch";
import ApolloCache from "./Cache";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || "/api/graphql",
  credentials: "include",
  fetch,
});

const authLink = setContext(() => ({
  headers: {},
}));

const retryLink = new RetryLink({
  delay: { initial: 300, max: Infinity, jitter: true },
  attempts: {
    max: 3,
    retryIf: (_error, operation) => {
      const def = operation.query.definitions[0];
      return "operation" in def && def.operation === "query";
    },
  },
});

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    for (const err of error.errors) {
      if (err.message === "Please sign in" && typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
  }
});

const Client = new ApolloClient({
  link: retryLink.concat(errorLink).concat(authLink).concat(httpLink),
  cache: ApolloCache,
});

export default Client;
