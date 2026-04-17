import ContextValue from "../../context";

const resolvers = {
  Query: {
    getUser: (_: unknown, __: unknown, ctx: ContextValue) =>
      ctx.dataSources.auth.getUser(),
  },
  Mutation: {
    signIn: (_: unknown, args: { username: string; password: string }, ctx: ContextValue) =>
      ctx.dataSources.auth.signIn(args),
  },
};

export default resolvers;
