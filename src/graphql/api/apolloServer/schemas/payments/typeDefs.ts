import { gql } from 'graphql-tag';

const typeDefs = gql`
  type ApiHeader {
    requestRefId: String
    responseCode: Int
    responseMessage: String
    customerMessage: String
    timestamp: String
  }

  input CreateOrderItemInput {
    productId: String!
    quantity: Int!
  }

  enum PaymentMethod {
    CARD
    MPESA
  }

  enum PaymentStatus {
    SUCCESS
    FAILED
    PENDING
  }

  type PaymentTransaction {
    id: Int!
    transactionId: String!
    orderId: String!
    paymentMethod: PaymentMethod!
    maskedDetail: String!
    amount: Float!
    status: PaymentStatus!
    createdAt: String!
    updatedAt: String!
  }

  type PaymentTransactionResponse {
    header: ApiHeader!
    body: PaymentTransaction!
  }

  input CardPaymentInput {
    method: PaymentMethod!
    cardNumber: String!
    expiry: String!
    cvv: String!
    simulateSuccess: Boolean
  }

  input MpesaPaymentInput {
    method: PaymentMethod!
    phone: String!
    simulateSuccess: Boolean
  }

  input ProcessPaymentInput {
    orderId: String!
    amount: Float!
    card: CardPaymentInput
    mpesa: MpesaPaymentInput
  }

  type PaymentErrorResponse {
    header: ApiHeader!
    body: String
  }

  union PaymentResponse = PaymentTransactionResponse | PaymentErrorResponse

  extend type Mutation {
    processPayment(input: ProcessPaymentInput!): PaymentResponse!
  }
`;

export default typeDefs;
