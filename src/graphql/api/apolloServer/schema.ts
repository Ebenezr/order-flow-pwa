import { makeExecutableSchema } from '@graphql-tools/schema';
import { ordersTypeDefs, ordersResolvers } from './schemas/orders';
import { menuTypeDefs, menuResolvers } from './schemas/menu';
import { menuAdminTypeDefs, menuAdminResolvers } from './schemas/menuAdmin';
import { kitchenTypeDefs, kitchenResolvers } from './schemas/kitchen';
import { reportsTypeDefs, reportsResolvers } from './schemas/reports';
import { paymentsResolvers, paymentsTypeDefs } from './schemas/payments';

const baseTypeDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    baseTypeDefs,
    ordersTypeDefs,
    menuTypeDefs,
    menuAdminTypeDefs,
    kitchenTypeDefs,
    reportsTypeDefs,
    paymentsTypeDefs,
  ],
  resolvers: [
    ordersResolvers,
    menuResolvers,
    menuAdminResolvers,
    kitchenResolvers,
    reportsResolvers,
    paymentsResolvers,
  ],
});

export default schema;
