'use client';
import OrderSidebar from '@/components/order/OrderSidebar';

export default function CartView({ onNext }: { onNext: () => void }) {
  return <OrderSidebar onPlaceOrder={onNext} />;
}
