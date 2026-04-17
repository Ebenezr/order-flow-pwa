import ContextValue from '../../context';

const resolvers = {
  Query: {
    getOrder: (_: unknown, args: { orderId: string }, ctx: ContextValue) =>
      ctx.dataSources.orders.getOrder(args.orderId),
    getOrderItems: (_: unknown, args: { orderId: string }, ctx: ContextValue) =>
      ctx.dataSources.orders.getOrderItems(args.orderId),
  },
  Mutation: {
    createOrder: (
      _: unknown,
      args: {
        customerId: string;
        items: { productId: string; quantity: number }[];
        correlationId: string;
      },
      ctx: ContextValue,
    ) =>
      ctx.dataSources.orders.createOrder(
        args.customerId,
        args.items,
        args.correlationId,
      ),
    completeOrder: (_: unknown, args: { orderId: string }, ctx: ContextValue) =>
      ctx.dataSources.orders.completeOrder(args.orderId),
    cancelOrder: (
      _: unknown,
      args: { orderId: string; reason: string; correlationId: string },
      ctx: ContextValue,
    ) =>
      ctx.dataSources.orders.cancelOrder(
        args.orderId,
        args.reason,
        args.correlationId,
      ),
  },
};

export default resolvers;
