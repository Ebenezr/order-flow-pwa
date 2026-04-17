'use client';

import { Box } from '@mui/material';

export default function KioskLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100dvh',
        backgroundColor: '#f5f5f5',
        p: 2,
        gap: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          borderRadius: 4,
          p: 3,
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>

      <Box
        sx={{
          width: 360,
          backgroundColor: '#fff',
          borderRadius: 4,
        }}
      >
        {sidebar}
      </Box>
    </Box>
  );
}
