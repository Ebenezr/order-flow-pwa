import { gql } from '@apollo/client/core';

export const GET_DAILY_SALES = gql`
  query GetDailySales($date: String) {
    getDailySales(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        date
        totalOrders
        totalRevenue
        vatCollected
        topSellingItems {
          productId
          productName
          totalQuantity
          totalRevenue
        }
      }
    }
  }
`;

export const GET_KITCHEN_PERFORMANCE = gql`
  query GetKitchenPerformance($date: String) {
    getKitchenPerformance(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        date
        totalKitchenOrders
        avgPrepTimeMinutes
        minPrepTimeMinutes
        maxPrepTimeMinutes
        slowItems {
          productId
          productName
          orderId
          prepTimeMinutes
        }
      }
    }
  }
`;

export const GET_PAYMENT_REPORT = gql`
  query GetPaymentReport($date: String) {
    getPaymentReport(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        date
        successfulPayments
        failedPayments
        failureRate
      }
    }
  }
`;

export const GET_CANCELLATION_REPORT = gql`
  query GetCancellationReport($date: String) {
    getCancellationReport(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        date
        cancelledOrders
        reasons {
          reason
          count
        }
      }
    }
  }
`;

export const GET_PROCESSING_TIMES = gql`
  query GetProcessingTimes($date: String) {
    getProcessingTimes(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        date
        avgInventoryReserveTimeMs
        avgPaymentProcessingMs
        avgKitchenPrepMinutes
      }
    }
  }
`;

export const GET_REVENUE_BY_CATEGORY = gql`
  query GetRevenueByCategory($date: String) {
    getRevenueByCategory(date: $date) {
      header {
        responseCode
        responseMessage
      }
      body {
        category
        revenue
      }
    }
  }
`;

export const GET_MONTHLY_SUMMARY = gql`
  query GetMonthlySummary($year: Int, $month: Int) {
    getMonthlySummary(year: $year, month: $month) {
      header {
        responseCode
        responseMessage
      }
      body {
        period
        grossSales
        netSales
        vatCollected
      }
    }
  }
`;
