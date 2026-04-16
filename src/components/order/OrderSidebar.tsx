'use client';

import { Box, Typography } from '@mui/material';
import OrderItem from './OrderItem';

const mockItems = [
  {
    name: 'Egg Kimbap',
    price: 'Rp 55.000',
    image: '/food1.jpg',
    quantity: 1,
  },
  {
    name: 'Tteokbokki',
    price: 'Rp 70.000',
    image: '/food2.jpg',
    quantity: 2,
    note: 'Mild Spicy',
  },
  {
    name: 'Mul Naengmyeon',
    price: 'Rp 65.000',
    image: '/food3.jpg',
    quantity: 1,
  },
];

export default function OrderSidebar() {
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
        {mockItems.map((item, i) => (
          <OrderItem key={i} {...item} />
        ))}
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2 }}>
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
