import { gql } from '@apollo/client/core';

export const START_PREPARING = gql`
  mutation StartPreparing($orderId: String!) {
    startPreparing(orderId: $orderId) {
      header {
        responseCode
        responseMessage
      }
      body {
        orderId
        status
        updatedAt
      }
    }
  }
`;

export const MARK_READY = gql`
  mutation MarkReady($orderId: String!) {
    markReady(orderId: $orderId) {
      header {
        responseCode
        responseMessage
      }
      body {
        orderId
        status
        updatedAt
      }
    }
  }
`;
