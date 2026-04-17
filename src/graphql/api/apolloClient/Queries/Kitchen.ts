import { gql } from '@apollo/client/core';

export const GET_KITCHEN_ORDERS = gql`
  query GetKitchenOrders($currentPage: Int, $pageSize: Int, $status: String) {
    getKitchenOrders(
      currentPage: $currentPage
      pageSize: $pageSize
      status: $status
    ) {
      header {
        responseCode
        responseMessage
      }
      body {
        orderId
        status
        items {
          productId
          productName
          quantity
          price
        }
        createdAt
        updatedAt
      }
    }
  }
`;
