import ParentClass from '../Main';

interface CreateOrderItemRequest {
  productId: string;
  quantity: number;
}

class Orders extends ParentClass {
  async createOrder(
    customerId: string,
    items: CreateOrderItemRequest[],
    correlationId: string,
  ) {
    return this.post('api/v1/orders', {
      params: { customerId },
      headers: { 'X-Correlation-Id': correlationId },
      body: items,
    });
  }

  async getOrder(orderId: string) {
    return this.get(`api/v1/orders/${encodeURIComponent(orderId)}`);
  }

  async getOrderItems(orderId: string) {
    return this.get(`api/v1/orders/${encodeURIComponent(orderId)}/items`);
  }

  async completeOrder(orderId: string) {
    return this.post(`api/v1/orders/${encodeURIComponent(orderId)}/complete`);
  }

  async cancelOrder(orderId: string, reason: string, correlationId: string) {
    return this.post(`api/v1/orders/${encodeURIComponent(orderId)}/cancel`, {
      headers: {
        'X-Correlation-Id': correlationId,
        'Content-Type': 'text/plain',
      },
      body: reason,
    });
  }
}

export default Orders;
