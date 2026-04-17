import ParentClass from '../Main';

class Reports extends ParentClass {
  async getDailySales(date?: string) {
    return this.get('api/v1/reports/daily-sales', {
      params: date ? { date } : {},
    });
  }

  async getKitchenPerformance(date?: string) {
    return this.get('api/v1/reports/kitchen-performance', {
      params: date ? { date } : {},
    });
  }

  async getPaymentReport(date?: string) {
    return this.get('api/v1/reports/payments', {
      params: date ? { date } : {},
    });
  }

  async getCancellationReport(date?: string) {
    return this.get('api/v1/reports/cancellations', {
      params: date ? { date } : {},
    });
  }

  async getProcessingTimes(date?: string) {
    return this.get('api/v1/reports/processing-times', {
      params: date ? { date } : {},
    });
  }

  async getRevenueByCategory(date?: string) {
    return this.get('api/v1/reports/revenue-by-category', {
      params: date ? { date } : {},
    });
  }

  async getMonthlySummary(year?: number, month?: number) {
    return this.get('api/v1/reports/monthly-summary', {
      params: {
        ...(year !== undefined && { year: year.toString() }),
        ...(month !== undefined && { month: month.toString() }),
      },
    });
  }
}

export default Reports;
