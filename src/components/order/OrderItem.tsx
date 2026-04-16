'use client';

import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
  id: string;
  name: string;
  price: string;
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
        pb: 2,
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

        <Typography sx={{ mt: 0.5 }}>{formatKES(parseFloat(price))}</Typography>
      </Box>

      {/* Quantity Controls */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          backgroundColor: '#f5f5f5',
          borderRadius: '50px',
          px: 1,
          py: 1,
        }}
      >
        <IconButton
          size='small'
          aria-label={`Decrease quantity of ${name}`}
          onClick={() => decrease(id)}
          // color='error'
          sx={{
            'backgroundColor': '#fff',
            'boxShadow': '0 1px 3px rgba(0,0,0,0.1)',
            '&:hover': { backgroundColor: '#fff' },
          }}
        >
          <RemoveIcon fontSize='medium' />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton
          size='small'
          aria-label={`Increase quantity of ${name}`}
          onClick={() => increase(id)}
          // color='success'
          sx={{
            'backgroundColor': '#fff',
            'boxShadow': '0 1px 3px rgba(0,0,0,0.1)',
            '&:hover': { backgroundColor: '#fff' },
          }}
        >
          <AddIcon fontSize='medium' />
        </IconButton>
      </Box>
    </Box>
  );
}
