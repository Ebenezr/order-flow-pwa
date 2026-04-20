'use client';

import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';

export default function StatusProgress({ status }: { status: string }) {
  const steps = ['CREATED', 'IN_KITCHEN', 'READY'];

  const currentIndex = steps.indexOf(
    status === 'PREPARING' ? 'IN_KITCHEN' : status,
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      {steps.map((step, i) => {
        const active = i <= currentIndex;

        return (
          <Box key={step} sx={{ display: 'flex', alignItems: 'center' }}>
            {i === 0 && (
              <CheckCircleIcon color={active ? 'error' : 'disabled'} />
            )}

            {i === 1 && (
              <RestaurantIcon color={active ? 'error' : 'disabled'} />
            )}

            {i === 2 && (
              <RoomServiceIcon color={active ? 'error' : 'disabled'} />
            )}

            {i < steps.length - 1 && (
              <Box
                sx={{
                  width: 40,
                  height: 2,
                  mx: 1,
                  backgroundColor: active ? '#d32f2f' : '#ccc',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
