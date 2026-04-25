import ContextValue from '../../context';
import { ProcessPaymentInput } from '../../dataSources/payments';

interface ProcessPaymentArgs {
  input: ProcessPaymentInput;
}

const resolvers = {
  Mutation: {
    processPayment: (
      _: unknown,
      args: ProcessPaymentArgs,
      ctx: ContextValue,
    ) => ctx.dataSources.payments.processPayment(args.input.orderId, args.input),
  },
};

export default resolvers;
