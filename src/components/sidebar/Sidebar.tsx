'use client';
import { Box } from '@mui/material';
import { useState } from 'react';
import CartView from './views/CartView';
import OrderStatusView from './views/OrderStatusView';
import { useCartStore } from '@/store/cart.store';

type Mode = 'CART' | 'ORDER_STATUS';

export default function Sidebar() {
  const [mode, setMode] = useState<Mode>('CART');

  const items = useCartStore((s) => s.items);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {mode === 'CART' && <CartView onNext={() => setMode('ORDER_STATUS')} />}
      {mode === 'ORDER_STATUS' && (
        <OrderStatusView
          items={items}
          onAddMore={() => setMode('CART')}
          onShowBill={() => console.log('go to bill')}
        />
      )}
    </Box>
  );
}
