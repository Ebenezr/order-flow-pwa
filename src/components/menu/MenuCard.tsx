'use client';

import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';

type Props = {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  oldPrice?: string;
};

export default function MenuCard({
  id,
  name,
  price,
  image,
  description,
  oldPrice,
}: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);

  const existing = items.find((i) => i.id === id);
  const quantity = existing?.quantity ?? 0;
  const isSelected = quantity > 0;

  return (
    <Box
      sx={{
        'display': 'flex',
        'flexDirection': 'column',

        'borderRadius': 4,
        'overflow': 'hidden',
        'border': isSelected ? '1px solid #d32f2f' : '1px solid #eee',
        'backgroundColor': '#fff',
        'transition': 'all 0.2s ease',
        'boxShadow': isSelected
          ? '0 6px 20px rgba(211,47,47,0.15)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          p: 1.5, // spacing like design
          pb: 0,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 180,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: 'cover',
            }}
          />

          {/* Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: '#d32f2f',
              color: '#fff',
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Most ordered
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography>{name}</Typography>

        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            mt: 1,
            lineHeight: 1.4,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Price block */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {oldPrice && (
            <Typography
              variant='body2'
              sx={{
                textDecoration: 'line-through',
                color: '#aaa',
                fontSize: 12,
              }}
            >
              {formatKES(parseFloat(oldPrice))}
            </Typography>
          )}

          <Typography variant='body1' sx={{ fontWeight: 700 }}>
            {formatKES(parseFloat(price))}
          </Typography>
        </Box>
        {/* Add / Quantity */}
        {isSelected ? (
          <Box
            onClick={() =>
              addItem({
                id,
                name,
                price,
                image,
              })
            }
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid #d32f2f',
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
                price,
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
            <AddIcon />
          </Box>
        )}
      </Box>
    </Box>
  );
}
