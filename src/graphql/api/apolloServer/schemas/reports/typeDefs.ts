import { gql } from 'graphql-tag';

const typeDefs = gql`
  type TopSellingItem {
    productId: String
    productName: String
    totalQuantity: Int
    totalRevenue: Float
  }

  type DailySalesReport {
    date: String
    totalOrders: Int
    totalRevenue: Float
    vatCollected: Float
    topSellingItems: [TopSellingItem]
  }

  type DailySalesResponse {
    header: ApiHeader
    body: DailySalesReport
  }

  type SlowItem {
    productId: String
    productName: String
    orderId: String
    prepTimeMinutes: Int
  }

  type KitchenPerformanceReport {
    date: String
    totalKitchenOrders: Int
    avgPrepTimeMinutes: Float
    minPrepTimeMinutes: Float
    maxPrepTimeMinutes: Float
    slowItems: [SlowItem]
  }

  type KitchenPerformanceResponse {
    header: ApiHeader
    body: KitchenPerformanceReport
  }

  type PaymentReport {
    date: String
    successfulPayments: Int
    failedPayments: Int
    failureRate: Float
  }

  type PaymentReportResponse {
    header: ApiHeader
    body: PaymentReport
  }

  type CancellationReport {
    date: String
    cancelledOrders: Int
    reasons: [CancellationReason]
  }

  type CancellationReason {
    reason: String
    count: Int
  }

  type CancellationReportResponse {
    header: ApiHeader
    body: CancellationReport
  }

  type ProcessingTimeReport {
    date: String
    avgInventoryReserveTimeMs: Float
    avgPaymentProcessingMs: Float
    avgKitchenPrepMinutes: Float
  }

  type ProcessingTimeResponse {
    header: ApiHeader
    body: ProcessingTimeReport
  }

  type CategoryRevenue {
    category: String
    revenue: Float
  }

  type RevenueByCategoryResponse {
    header: ApiHeader
    body: [CategoryRevenue]
  }

  type MonthlySummaryReport {
    period: String
    grossSales: Float
    netSales: Float
    vatCollected: Float
  }

  type MonthlySummaryResponse {
    header: ApiHeader
    body: MonthlySummaryReport
  }

  extend type Query {
    getDailySales(date: String): DailySalesResponse
    getKitchenPerformance(date: String): KitchenPerformanceResponse
    getPaymentReport(date: String): PaymentReportResponse
    getCancellationReport(date: String): CancellationReportResponse
    getProcessingTimes(date: String): ProcessingTimeResponse
    getRevenueByCategory(date: String): RevenueByCategoryResponse
    getMonthlySummary(year: Int, month: Int): MonthlySummaryResponse
  }
`;

export default typeDefs;
