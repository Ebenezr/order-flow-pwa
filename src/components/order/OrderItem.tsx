'use client';

import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import { Box, Typography } from '@mui/material';

type Props = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  note?: string;
};

export default function OrderItem({
  id,
  name,
  price,
  image,
  quantity,
  note,
}: Props) {
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 2,
        alignItems: 'center',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: 2,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography>{name}</Typography>

        {note && (
          <Typography variant='body2' color='text.secondary'>
            {note}
          </Typography>
        )}

        <Typography sx={{ mt: 0.5 }}>{formatKES(price)}</Typography>
      </Box>

      {/* Quantity Controls */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          backgroundColor: '#f5f5f5',
          borderRadius: 999,
          px: 1,
          py: 0.5,
        }}
      >
        <Box sx={{ cursor: 'pointer' }} onClick={() => decrease(id)}>
          −
        </Box>
        <Typography>{quantity}</Typography>
        <Box sx={{ cursor: 'pointer' }} onClick={() => increase(id)}>
          +
        </Box>
      </Box>
    </Box>
  );
}
