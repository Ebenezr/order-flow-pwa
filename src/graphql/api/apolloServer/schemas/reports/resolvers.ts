import ContextValue from '../../context';

const resolvers = {
  Query: {
    getDailySales: (_: unknown, args: { date?: string }, ctx: ContextValue) =>
      ctx.dataSources.reports.getDailySales(args.date),
    getKitchenPerformance: (
      _: unknown,
      args: { date?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getKitchenPerformance(args.date),
    getPaymentReport: (
      _: unknown,
      args: { date?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getPaymentReport(args.date),
    getCancellationReport: (
      _: unknown,
      args: { date?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getCancellationReport(args.date),
    getProcessingTimes: (
      _: unknown,
      args: { date?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getProcessingTimes(args.date),
    getRevenueByCategory: (
      _: unknown,
      args: { date?: string },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getRevenueByCategory(args.date),
    getMonthlySummary: (
      _: unknown,
      args: { year?: number; month?: number },
      ctx: ContextValue,
    ) => ctx.dataSources.reports.getMonthlySummary(args.year, args.month),
  },
};

export default resolvers;
