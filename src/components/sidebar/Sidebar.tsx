'use client';
import { Box } from '@mui/material';
import { useState } from 'react';
import CartView from './views/CartView';
import OrderStatusView from './views/OrderStatusView';
import { useCartStore } from '@/store/cart.store';

function EmptyStateSubtle({
  title,
  subtitle,
  onAction,
}: {
  title: string;
  subtitle?: string;
  onAction?: () => void;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        color: '#777',
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          fontSize: 42,
          mb: 2,
          opacity: 0.3, // 👈 makes it feel empty / inactive
          filter: 'grayscale(1)', // 👈 removes “food richness”
        }}
      >
        🥣
      </Box>

      {/* Title */}
      <Box
        sx={{
          fontWeight: 500,
          fontSize: 16,
          mb: 1,
          color: '#444',
        }}
      >
        {title}
      </Box>

      {/* Subtitle */}
      {subtitle && (
        <Box
          sx={{
            fontSize: 14,
            mb: 2,
          }}
        >
          {subtitle}
        </Box>
      )}

      {/* Link-style action */}
      {onAction && (
        <Box
          onClick={onAction}
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: '#d32f2f',
            cursor: 'pointer',
          }}
        >
          Browse menu
        </Box>
      )}
    </Box>
  );
}

type Mode = 'CART' | 'ORDER_STATUS';

export default function Sidebar() {
  const [mode, setMode] = useState<Mode>('CART');

  const items = useCartStore((s) => s.items);

  const isEmpty = items.length === 0;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* EMPTY STATE */}
      {isEmpty && (
        <EmptyStateSubtle
          title='Your cart is empty'
          subtitle='Add items from the menu to start your order'
          onAction={() => setMode('CART')}
        />
      )}
      {/* CART */}
      {!isEmpty && mode === 'CART' && (
        <CartView onNext={() => setMode('ORDER_STATUS')} />
      )}

      {/* ORDER STATUS */}
      {!isEmpty && mode === 'ORDER_STATUS' && (
        <OrderStatusView
          items={items}
          onAddMore={() => setMode('CART')}
          onShowBill={() => console.log('go to bill')}
        />
      )}
    </Box>
  );
}
