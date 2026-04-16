'use client';

import { Box, Typography } from '@mui/material';

type Props = {
  name: string;
  price: string;
  image: string;
  description?: string;
  highlight?: boolean;
  quantity?: number;
};

export default function MenuCard({
  name,
  price,
  image,
  description,
  highlight,
  quantity,
}: Props) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: highlight ? '2px solid #d32f2f' : '1px solid #eee',
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
          <Typography>{price}</Typography>

          {/* Add / Quantity */}
          {quantity ? (
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
