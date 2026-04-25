import { gql } from '@apollo/client/core';

export const PROCESS_PAYMENT = gql`
  mutation ProcessPayment($input: ProcessPaymentInput!) {
    processPayment(input: $input) {
      __typename
      ... on PaymentTransactionResponse {
        header {
          requestRefId
          responseCode
          responseMessage
          customerMessage
          timestamp
        }
        transaction: body {
          id
          transactionId
          orderId
          paymentMethod
          maskedDetail
          amount
          status
          createdAt
          updatedAt
        }
      }
      ... on PaymentErrorResponse {
        header {
          requestRefId
          responseCode
          responseMessage
          customerMessage
          timestamp
        }
        errorMessage: body
      }
    }
  }
`;

export interface CardPaymentInput {
  method: 'CARD';
  cardNumber: string;
  expiry: string;
  cvv: string;
  simulateSuccess?: boolean;
}

export interface MpesaPaymentInput {
  method: 'MPESA';
  phone: string;
  simulateSuccess?: boolean;
}

export interface ProcessPaymentInput {
  orderId: string;
  amount: number;
  card?: CardPaymentInput;
  mpesa?: MpesaPaymentInput;
}
