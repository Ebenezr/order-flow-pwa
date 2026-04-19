import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';

type Status = 'IN_KITCHEN' | 'PREPARING' | 'READY';

const steps = ['IN_KITCHEN', 'PREPARING', 'READY'];

export default function OrderStatusItem({
  name,
  status,
}: {
  name: string;
  status: Status;
}) {
  const activeIndex = steps.indexOf(status);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ mb: 2, fontWeight: 600 }}>{name}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {steps.map((step, index) => {
          const isActive = index <= activeIndex;

          return (
            <Box
              key={step}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isActive ? '#d32f2f' : '#eee',
                  color: isActive ? '#fff' : '#aaa',
                }}
              >
                {index === 0 && <CheckCircleIcon fontSize='small' />}
                {index === 1 && <RestaurantIcon fontSize='small' />}
                {index === 2 && <RoomServiceIcon fontSize='small' />}
              </Box>

              {/* Line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    flex: 1,
                    height: 3,
                    backgroundColor: index < activeIndex ? '#d32f2f' : '#eee',
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      {/* Labels */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
          fontSize: 12,
          color: '#777',
        }}
      >
        <span>Placed</span>
        <span>Preparing</span>
        <span>Ready</span>
      </Box>
    </Box>
  );
}
