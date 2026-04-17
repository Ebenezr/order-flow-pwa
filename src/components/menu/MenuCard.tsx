'use client';

import { useCartStore } from '@/store/cart.store';
import { formatKES } from '@/utils/currency';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';

type Props = {
  id?: string | null;
  name?: string | null;
  price?: number | null;
  imageUrl?: string | null;
  description?: string | null;
  available?: boolean | null;
  tags?: (string | null)[] | null;
};

export default function MenuCard({
  id,
  name,
  price,
  imageUrl,
  description,
  available = true,
  tags = [],
}: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const items = useCartStore((s) => s.items);

  const existing = items.find((i) => i.id === id);
  const quantity = existing?.quantity ?? 0;
  const isSelected = quantity > 0;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        border: isSelected ? '1px solid #d32f2f' : '1px solid #eee',
        backgroundColor: '#fff',
        opacity: available ? 1 : 0.5,
        pointerEvents: available ? 'auto' : 'none',
        transition: 'all 0.2s ease',
        boxShadow: isSelected
          ? '0 6px 20px rgba(211,47,47,0.15)'
          : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Image */}
      <Box sx={{ p: 1.5, pb: 0 }}>
        <Box
          sx={{
            position: 'relative',
            height: 180,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <Image
            src={imageUrl || '/placeholder.png'}
            alt={name || 'Menu item'}
            fill
            style={{ objectFit: 'cover' }}
          />

          {/*  TODO:Badge */}
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography>{name}</Typography>

        {/* Tags (optional polish) */}
        {tags && tags.length > 0 && (
          <Typography variant='caption' color='text.secondary'>
            {tags.join(' • ')}
          </Typography>
        )}

        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            mt: 0.5,
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

      {/* Bottom */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Price */}
        <Typography>{formatKES(price ?? 0)}</Typography>

        {/* Actions */}
        {/* {isSelected ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid #ddd',
              borderRadius: 999,
              px: 1,
              py: 0.5,
            }}
          >
            <Box onClick={() => decrease(id ?? '')} sx={{ cursor: 'pointer' }}>
              −
            </Box>

            <Typography>{quantity}</Typography>

            <Box onClick={() => increase(id ?? '')} sx={{ cursor: 'pointer' }}>
              +
            </Box>
          </Box>
        ) : (
          <Box
            onClick={() =>
              addItem({
                id: id ?? '',
                name: name ?? '',
                price: price ?? 0,
                imageUrl: imageUrl ?? '/placeholder.png',
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
              cursor: 'pointer',
            }}
          >
            <AddIcon />
          </Box>
        )} */}

        {/* Actions */}
        {isSelected ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 999,
              overflow: 'hidden',
              border: '1px solid #e0e0e0',
              backgroundColor: '#fafafa',
            }}
          >
            {/* DECREASE */}
            <Box
              onClick={() => decrease(id ?? '')}
              sx={{
                'width': 44,
                'height': 44,
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'fontSize': 22,
                'fontWeight': 600,
                'cursor': 'pointer',
                'color': '#d32f2f',
                '&:active': {
                  backgroundColor: '#ffebee',
                },
              }}
            >
              <RemoveIcon fontSize='small' />
            </Box>

            {/* QUANTITY */}
            <Box
              sx={{
                minWidth: 40,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {quantity}
            </Box>

            {/* INCREASE */}
            <Box
              onClick={() => increase(id ?? '')}
              sx={{
                'width': 44,
                'height': 44,
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'fontSize': 22,
                'fontWeight': 600,
                'cursor': 'pointer',
                'color': '#fff',
                'backgroundColor': '#d32f2f',
                '&:active': {
                  backgroundColor: '#b71c1c',
                },
              }}
            >
              <AddIcon fontSize='small' />
            </Box>
          </Box>
        ) : (
          <Box
            onClick={() =>
              addItem({
                id: id ?? '',
                name: name ?? '',
                price: price ?? 0,
                imageUrl: imageUrl ?? '/placeholder.png',
              })
            }
            sx={{
              'width': 48, // bigger
              'height': 48,
              'borderRadius': '50%',
              'backgroundColor': '#d32f2f',
              'color': '#fff',
              'display': 'flex',
              'alignItems': 'center',
              'justifyContent': 'center',
              'cursor': 'pointer',
              '&:active': {
                backgroundColor: '#b71c1c',
              },
            }}
          >
            <AddIcon fontSize='medium' />
          </Box>
        )}
      </Box>
    </Box>
  );
}
