import ContextValue from "../../context";

const resolvers = {
  Mutation: {
    createMenuItem: (_: unknown, args: { item: Record<string, unknown> }, ctx: ContextValue) =>
      ctx.dataSources.menuAdmin.createMenuItem(args.item as never),
    updateMenuItem: (
      _: unknown,
      args: { productId: string; item: Record<string, unknown> },
      ctx: ContextValue
    ) => ctx.dataSources.menuAdmin.updateMenuItem(args.productId, args.item as never),
    setItemAvailability: (
      _: unknown,
      args: { productId: string; available: boolean },
      ctx: ContextValue
    ) => ctx.dataSources.menuAdmin.setItemAvailability(args.productId, args.available),
  },
};

export default resolvers;
