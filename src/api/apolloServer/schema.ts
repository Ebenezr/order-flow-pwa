import { makeExecutableSchema } from "@graphql-tools/schema";
import { authTypeDefs, authResolvers } from "./schemas/auth";

const schema = makeExecutableSchema({
  typeDefs: [authTypeDefs],
  resolvers: [authResolvers],
});

export default schema;
