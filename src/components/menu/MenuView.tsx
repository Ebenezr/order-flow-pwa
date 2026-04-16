'use client';

import { Box, Typography, TextField } from '@mui/material';
import MenuGrid from './MenuGrid';

const categories = ['Promo', 'Meal Set', 'Soup', 'Noodle', 'Snack', 'Sandwich'];

export default function MenuView() {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant='h4'>99 Kitchen</Typography>

        <TextField
          size='small'
          placeholder='Search your favorite food'
          sx={{
            'width': 320,
            'backgroundColor': '#f5f5f5',
            'borderRadius': 3,
            '& fieldset': { border: 'none' },
          }}
        />
      </Box>

      {/* Categories */}
      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        {categories.map((cat, i) => (
          <Box
            key={cat}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 500,
              cursor: 'pointer',
              backgroundColor: i === 0 ? '#ffebee' : '#f1f1f1',
              color: i === 0 ? '#d32f2f' : '#555',
            }}
          >
            {cat}
          </Box>
        ))}
      </Box>

      <MenuGrid />
    </Box>
  );
}
