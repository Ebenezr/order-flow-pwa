import KioskLayout from '@/components/layout/KioskLayout';
import MenuView from '@/components/menu/MenuView';
import OrderSidebar from '@/components/order/OrderSidebar';

export default function Home() {
  return (
    <KioskLayout sidebar={<OrderSidebar />}>
      <MenuView />
    </KioskLayout>
  );
}
