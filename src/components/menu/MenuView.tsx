'use client';

import { useState, useMemo } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import MenuGrid from './MenuGrid';
import { useQuery } from '@apollo/client/react';
import { GetMenuGroupedByCategoryQuery } from '@/graphql/generated/graphql';
import { GET_MENU_GROUPED_BY_CATEGORY } from '@/graphql/api/apolloClient/Queries/Menu';

export default function MenuView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data } = useQuery<GetMenuGroupedByCategoryQuery>(
    GET_MENU_GROUPED_BY_CATEGORY,
    { fetchPolicy: 'cache-first' }
  );

  const categories = useMemo(() => {
    const groups = data?.getMenuGroupedByCategory?.body;
    if (!groups) return [];
    return groups
      .map((g) => g?.category)
      .filter((c): c is string => Boolean(c));
  }, [data]);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
      <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
        <Box
          onClick={() => setSelectedCategory(null)}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 999,
            fontWeight: 500,
            cursor: 'pointer',
            backgroundColor: selectedCategory === null ? '#ffebee' : '#f1f1f1',
            color: selectedCategory === null ? '#d32f2f' : '#555',
          }}
        >
          All
        </Box>
        {categories.map((cat) => (
          <Box
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            sx={{
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 500,
              cursor: 'pointer',
              backgroundColor:
                selectedCategory === cat ? '#ffebee' : '#f1f1f1',
              color: selectedCategory === cat ? '#d32f2f' : '#555',
            }}
          >
            {cat}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        <MenuGrid category={selectedCategory} />
      </Box>
    </Box>
  );
}
