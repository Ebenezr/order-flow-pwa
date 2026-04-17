import ContextValue from '../../context';

const resolvers = {
  Query: {
    getKitchenOrders: (
      _: unknown,
      args: { currentPage?: number; pageSize?: number; status?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.kitchen.getKitchenOrders(args),
  },
  Mutation: {
    startPreparing: (
      _: unknown,
      args: { orderId: string },
      ctx: ContextValue,
    ) => ctx.dataSources.kitchen.startPreparing(args.orderId),
    markReady: (_: unknown, args: { orderId: string }, ctx: ContextValue) =>
      ctx.dataSources.kitchen.markReady(args.orderId),
  },
};

export default resolvers;
