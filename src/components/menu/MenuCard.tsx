'use client';

import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import { Box, Typography } from '@mui/material';

type Props = {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
};

export default function MenuCard({
  name,
  price,
  image,
  description,
  id,
}: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);

  const existing = items.find((i) => i.id === id);
  const quantity = existing?.quantity ?? 0;
  const isSelected = quantity > 0;

  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: isSelected ? '2px solid #d32f2f' : '1px solid #eee',
        backgroundColor: '#fff',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          height: 180,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: '#d32f2f',
            color: '#fff',
            px: 1,
            py: 0.5,
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Most ordered
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2 }}>
        <Typography>{name}</Typography>

        <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
          {description}
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>{formatKES(Number(price))}</Typography>

          {/* Add / Quantity */}
          {isSelected ? (
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '2px solid #d32f2f',
                color: '#d32f2f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
              }}
            >
              {quantity}
            </Box>
          ) : (
            <Box
              onClick={() =>
                addItem({
                  id,
                  name,
                  price: Number(price),
                  image,
                })
              }
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#d32f2f',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                cursor: 'pointer',
              }}
            >
              +
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
