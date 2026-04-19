'use client';

import { Box, Button, Typography } from '@mui/material';
import OrderItem from './OrderItem';
import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import PaymentModal from '../payment/PaymentModal';
import { useState } from 'react';

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

export default function OrderSidebar({
  onPlaceOrder,
}: {
  onPlaceOrder?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const vat = useCartStore((s) => s.getVAT());
  const service = useCartStore((s) => s.getServiceCharge());
  const total = useCartStore((s) => s.getTotal());

  const isEmpty = items.length === 0;

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

        <Button
          variant='contained'
          color='primary'
          fullWidth
          disabled={isEmpty}
          onClick={!isEmpty ? () => setOpen(true) : undefined}
          sx={{
            'borderRadius': 3,
            'boxShadow': 'none',
            '&:hover': { boxShadow: 'none', backgroundColor: '#c62828' },
            'lineHeight': 2.5,
            'fontWeight': 600,
          }}
        >
          Place Order
        </Button>
        <PaymentModal
          open={open}
          total={total}
          onClose={() => setOpen(false)}
          onSuccess={() => {
            console.log('payment success');
            onPlaceOrder?.();
            setOpen(false);
          }}
        />
      </Box>
    </Box>
  );
}
