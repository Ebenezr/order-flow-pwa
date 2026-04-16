'use client';

import { Box, Typography } from '@mui/material';
import OrderItem from './OrderItem';
import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';

const Row = ({ label, value }: { label: string; value: number }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      mb: 0.5,
    }}
  >
    <Typography color='text.secondary'>{label}</Typography>
    <Typography>{formatKES(value)}</Typography>
  </Box>
);

export default function OrderSidebar() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const vat = useCartStore((s) => s.getVAT());
  const service = useCartStore((s) => s.getServiceCharge());
  const total = useCartStore((s) => s.getTotal());

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
        <Box sx={{ mb: 2 }}>
          <Row label='Subtotal' value={subtotal} />
          <Row label='VAT (16%)' value={vat} />
          <Row label='Service (5%)' value={service} />
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
          <Typography>{formatKES(total)}</Typography>
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
