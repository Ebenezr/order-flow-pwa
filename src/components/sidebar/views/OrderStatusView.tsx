'use client';

import { Box, Typography, Button } from '@mui/material';
import StatusProgress from '../../StatusProgress';

type Props = {
  items: { name: string; status?: string }[];
  onAddMore: () => void;
  onShowBill: () => void;
};

function mapStatus(status: string) {
  if (status === 'READY') return 'READY';
  if (status === 'PREPARING') return 'PREPARING';
  return 'IN_KITCHEN';
}

export default function OrderStatusView({
  items,
  onAddMore,
  onShowBill,
}: Props) {
  return (
    <>
      {/* Header */}
      <Box sx={{ p: 3 }}>
        <Typography variant='h5'>Your Order Status</Typography>
        <Typography variant='body2'>Order ID: #161</Typography>
        <Typography variant='body2'>Table: 12</Typography>
      </Box>

      {/* Status list */}
      <Box sx={{ flex: 1, overflowY: 'auto', px: 2 }}>
        {items.map((item, i) => (
          <Box key={i} sx={{ mb: 4 }}>
            <Typography sx={{ mb: 1, fontWeight: 600 }}>{item.name}</Typography>

            <StatusProgress status={mapStatus(item.status || 'CREATED')} />
          </Box>
        ))}
      </Box>

      {/* Actions */}
      {/* <Box sx={{ p: 3, display: 'flex', gap: 2 }}>
        <Button
          fullWidth
          onClick={onAddMore}
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            height: 56,
            borderRadius: 3,
          }}
        >
          Add More Items
        </Button>

        <Button
          fullWidth
          variant='outlined'
          onClick={onShowBill}
          sx={{
            height: 56,
            borderRadius: 3,
          }}
        >
          View Bill
        </Button>
      </Box> */}
    </>
  );
}
