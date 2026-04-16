'use client';

import { Box } from '@mui/material';
import MenuCard from './MenuCard';

const mockData = [
  {
    id: '1',
    name: 'Original Kimbab',
    price: '500.00',
    oldPrice: '700.00',
    description: 'Kimbab, also known as gimbap, is a popular Korean dish',
    image:
      'https://substackcdn.com/image/fetch/$s_!2nBU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16b32d4e-ae68-4777-ae52-b3d371d963ca_8256x5504.heic',
  },
  {
    id: '2',
    name: 'Tteokbokki',
    price: '3545.00',
    oldPrice: '4000.00',
    description:
      'Tteokbokki is a beloved Korean street food made from chewy rice cakes simmered in a spicy and sweet gochujang-based sauce. Often enjoyed as a comforting snack or meal, it can be customized with various ingredients like fish cakes, boiled eggs, and vegetables. The dish is known for its bold flavors and satisfying texture, making it a popular choice among locals and visitors alike.',

    image:
      'https://www.truefoodkitchen.com/wp-content/uploads/2024/09/Blueberry-Pancakes.jpg',
  },
  {
    id: '3',
    name: 'Bibimbap',
    price: '554.30',
    oldPrice: '600.00',
    description:
      'Bibimbap is a traditional Korean dish that consists of a bowl of warm white rice topped with sautéed and seasoned vegetables, chili pepper paste, soy sauce, or fermented soybean paste. A raw or fried egg and sliced meat are common additions. The ingredients are stirred together thoroughly just before eating.',
    image:
      'https://www.tasteofhome.com/wp-content/uploads/2024/10/EXPS_TOHD24_167133_SarahTramonte_6.jpg?w=700',
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
