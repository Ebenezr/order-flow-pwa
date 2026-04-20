import ParentClass from '../Main';

interface GetKitchenOrdersParams {
  currentPage?: number;
  pageSize?: number;
  status?: string;
}

class Kitchen extends ParentClass {
  async getKitchenOrders(params: GetKitchenOrdersParams = {}) {
    return this.get('api/v1/kitchen/orders', {
      params: {
        currentPage: params.currentPage?.toString(),
        pageSize: params.pageSize?.toString(),
        status: params.status,
      },
    });
  }

  async startPreparing(orderId: string) {
    return this.put(
      `api/v1/kitchen/orders/${encodeURIComponent(orderId)}/start`,
    );
  }

  async markReady(orderId: string) {
    return this.put(
      `api/v1/kitchen/orders/${encodeURIComponent(orderId)}/ready`,
    );
  }
}

export default Kitchen;
