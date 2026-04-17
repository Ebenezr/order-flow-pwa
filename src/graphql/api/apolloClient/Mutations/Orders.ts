import { gql } from '@apollo/client/core';

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $customerId: String!
    $items: [CreateOrderItemInput!]!
    $correlationId: String!
  ) {
    createOrder(
      customerId: $customerId
      items: $items
      correlationId: $correlationId
    ) {
      header {
        responseCode
        responseMessage
        customerMessage
      }
      body {
        id
        orderId
        customerId
        status
        createdAt
        subtotal
        vat
        serviceCharge
        discount
        totalAmount
      }
    }
  }
`;

export const COMPLETE_ORDER = gql`
  mutation CompleteOrder($orderId: String!) {
    completeOrder(orderId: $orderId) {
      header {
        responseCode
        responseMessage
      }
      body {
        orderId
        status
        updatedAt
        totalAmount
      }
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation CancelOrder(
    $orderId: String!
    $reason: String!
    $correlationId: String!
  ) {
    cancelOrder(
      orderId: $orderId
      reason: $reason
      correlationId: $correlationId
    ) {
      header {
        responseCode
        responseMessage
        customerMessage
      }
      body {
        orderId
        status
        cancellationReason
        updatedAt
      }
    }
  }
`;
