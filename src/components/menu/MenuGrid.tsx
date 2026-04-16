'use client';

import { Box } from '@mui/material';
import MenuCard from './MenuCard';

const mockData = [
  {
    name: 'Original Kimbab',
    price: 'Rp 50.000',
    image: '/food1.jpg',
  },
  {
    name: 'Tteokbokki',
    price: 'Rp 35.000',
    image: '/food2.jpg',
    highlight: true,
    quantity: 2,
  },
  {
    name: 'Bibimbap',
    price: 'Rp 55.000',
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
      {mockData.map((item, i) => (
        <MenuCard key={i} {...item} />
      ))}
    </Box>
  );
}
