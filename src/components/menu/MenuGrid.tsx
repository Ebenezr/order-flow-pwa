'use client';

import { Box } from '@mui/material';
import MenuCard from './MenuCard';

const mockData = [
  {
    id: '1',
    name: 'Original Kimbab',
    price: '500.00',
    image: '/food1.jpg',
  },
  {
    id: '2',
    name: 'Tteokbokki',
    price: '3545.00',
    image: '/food2.jpg',
  },
  {
    id: '3',
    name: 'Bibimbap',
    price: '554.30',
    image: '/food3.jpg',
  },
];

export default function MenuGrid() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
      }}
    >
      {mockData.map((item) => (
        <MenuCard key={item.id} {...item} />
      ))}
    </Box>
  );
}
