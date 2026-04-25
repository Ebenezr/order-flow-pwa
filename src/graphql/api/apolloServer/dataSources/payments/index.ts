import ParentClass from '../Main';

export enum PaymentMethod {
  CARD = 'CARD',
  MPESA = 'MPESA',
}

export interface CardPaymentInput {
  method: PaymentMethod.CARD;
  cardNumber: string;
  expiry: string;
  cvv: string;
  simulateSuccess?: boolean;
}

export interface MpesaPaymentInput {
  method: PaymentMethod.MPESA;
  phone: string;
  simulateSuccess?: boolean;
}

export interface ProcessPaymentInput {
  orderId: string;
  amount: number;
  card?: CardPaymentInput;
  mpesa?: MpesaPaymentInput;
}

class Payments extends ParentClass {
  async processPayment(orderId: string, payload: ProcessPaymentInput) {
    return this.post(`api/v1/payments/${orderId}`, {
      body: payload,
    });
  }
}

export default Payments;
