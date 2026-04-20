import { gql } from '@apollo/client/core';

export const GET_ORDER = gql`
  query GetOrder($orderId: String!) {
    getOrder(orderId: $orderId) {
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
        updatedAt
        subtotal
        vat
        serviceCharge
        discount
        totalAmount
        cancellationReason
      }
    }
  }
`;

export const GET_ORDER_ITEMS = gql`
  query GetOrderItems($orderId: String!) {
    getOrderItems(orderId: $orderId) {
      header {
        responseCode
        responseMessage
      }
      body {
        id
        orderId
        productId
        productName
        quantity
        price
        category
        productSnapshot
      }
    }
  }
`;
