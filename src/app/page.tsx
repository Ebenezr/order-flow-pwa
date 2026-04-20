import KioskLayout from '@/components/layout/KioskLayout';
import MenuView from '@/components/menu/MenuView';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <KioskLayout sidebar={<Sidebar />}>
      <MenuView />
    </KioskLayout>
  );
}
