'use client';

import { Box, Typography } from '@mui/material';
import OrderItem from './OrderItem';
import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';

export default function OrderSidebar() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
        <Typography variant='h6'>Your Current Order</Typography>

        <Typography variant='body2' color='text.secondary'>
          Order ID: #161
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          Table: 12
        </Typography>
      </Box>

      {/* Items */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
        }}
      >
        {items.map((item) => (
          <OrderItem key={item.id} {...item} />
        ))}
      </Box>

      <Box sx={{ p: 2, borderTop: '1px solid #eee' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Typography color='text.secondary'>Subtotal</Typography>
          <Typography>{formatKES(subtotal)}</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 700,
            mb: 2,
          }}
        >
          <Typography>Total</Typography>
          <Typography>{formatKES(subtotal)}</Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            textAlign: 'center',
            py: 2,
            borderRadius: 3,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Place Order
        </Box>
      </Box>
    </Box>
  );
}
