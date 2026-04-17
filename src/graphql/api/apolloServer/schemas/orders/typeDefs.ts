import { gql } from 'graphql-tag';

const typeDefs = gql`
  type ApiHeader {
    requestRefId: String
    responseCode: Int
    responseMessage: String
    customerMessage: String
    timestamp: String
  }

  enum OrderStatus {
    CREATED
    PENDING_PAYMENT
    CONFIRMED
    IN_KITCHEN
    READY
    COMPLETED
    CANCELLED
    FAILED
  }

  type Order {
    id: Int
    orderId: String
    customerId: String
    status: OrderStatus
    createdAt: String
    updatedAt: String
    subtotal: Float
    vat: Float
    serviceCharge: Float
    discount: Float
    totalAmount: Float
    cancellationReason: String
  }

  type OrderResponse {
    header: ApiHeader
    body: Order
  }

  type OrderItem {
    id: Int
    orderId: String
    productId: String
    productName: String
    quantity: Int
    price: Float
    category: String
    productSnapshot: String
  }

  type OrderItemsResponse {
    header: ApiHeader
    body: [OrderItem]
  }

  input CreateOrderItemInput {
    productId: String!
    quantity: Int!
  }

  extend type Query {
    getOrder(orderId: String!): OrderResponse
    getOrderItems(orderId: String!): OrderItemsResponse
  }

  extend type Mutation {
    createOrder(
      customerId: String!
      items: [CreateOrderItemInput!]!
    ): OrderResponse
    completeOrder(orderId: String!): OrderResponse
    cancelOrder(orderId: String!, reason: String!): OrderResponse
  }
`;

export default typeDefs;
