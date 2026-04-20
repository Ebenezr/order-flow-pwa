import ContextValue from '../../context';

interface GetMenuArgs {
  currentPage?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  available?: boolean;
}

const resolvers = {
  Query: {
    getMenu: (_: unknown, args: GetMenuArgs, ctx: ContextValue) =>
      ctx.dataSources.menu.getMenu(args),
    getMenuItem: (_: unknown, args: { productId: string }, ctx: ContextValue) =>
      ctx.dataSources.menu.getMenuItem(args.productId),
    getMenuGroupedByCategory: (_: unknown, __: unknown, ctx: ContextValue) =>
      ctx.dataSources.menu.getMenuGroupedByCategory(),
    getMenuGroupedByTag: (_: unknown, __: unknown, ctx: ContextValue) =>
      ctx.dataSources.menu.getMenuGroupedByTag(),
  },
};

export default resolvers;
