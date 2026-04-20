'use client';

import { Box, Skeleton } from '@mui/material';

export default function MenuCardSkeleton() {
  return (
    <Box
      sx={{
        borderRadius: 4,
        border: '1px solid #eee',
        p: 2,
      }}
    >
      <Skeleton variant='rounded' height={180} sx={{ borderRadius: 3 }} />

      <Skeleton sx={{ mt: 2 }} width='60%' height={20} />
      <Skeleton sx={{ mt: 1 }} width='100%' height={16} />
      <Skeleton sx={{ mt: 0.5 }} width='90%' height={16} />

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Skeleton width={80} height={20} />
        <Skeleton variant='circular' width={36} height={36} />
      </Box>
    </Box>
  );
}
