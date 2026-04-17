import { gql } from 'graphql-tag';

const typeDefs = gql`
  type KitchenOrder {
    orderId: String
    status: String
    items: [OrderItem]
    createdAt: String
    updatedAt: String
  }

  type KitchenOrdersResponse {
    header: ApiHeader
    body: [KitchenOrder]
  }

  type KitchenOrderResponse {
    header: ApiHeader
    body: KitchenOrder
  }

  extend type Query {
    getKitchenOrders(
      currentPage: Int
      pageSize: Int
      status: String
    ): KitchenOrdersResponse
  }

  extend type Mutation {
    startPreparing(orderId: String!): KitchenOrderResponse
    markReady(orderId: String!): KitchenOrderResponse
  }
`;

export default typeDefs;
