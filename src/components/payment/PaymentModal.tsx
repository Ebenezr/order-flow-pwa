'use client';
import { Box, Typography, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { formatKES } from '@/utils/currency';

type Props = {
  open: boolean;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
};

type Method = 'mpesa' | 'card' | null;

export default function PaymentModal({
  open,
  onClose,
  total,
  onSuccess,
}: Props) {
  const [method, setMethod] = useState<Method>(null);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          width: 480,
          borderRadius: 4,
          backgroundColor: '#fff',
          p: 4,
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}
      >
        {/* Header */}
        <Typography variant='h6' sx={{ mb: 2 }}>
          Complete Payment
        </Typography>

        {/* Amount */}
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            mb: 3,
          }}
        >
          {formatKES(total)}
        </Typography>

        {/* Payment options */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            fullWidth
            onClick={() => setMethod('mpesa')}
            sx={{
              height: 56,
              borderRadius: 3,
              backgroundColor: method === 'mpesa' ? '#d32f2f' : '#f5f5f5',
              color: method === 'mpesa' ? '#fff' : '#333',
            }}
          >
            M-Pesa
          </Button>

          <Button
            fullWidth
            onClick={() => setMethod('card')}
            sx={{
              height: 56,
              borderRadius: 3,
              backgroundColor: method === 'card' ? '#d32f2f' : '#f5f5f5',
              color: method === 'card' ? '#fff' : '#333',
            }}
          >
            Card
          </Button>
        </Box>

        {/* Dynamic content */}
        <Box
          sx={{
            minHeight: 180,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            backgroundColor: '#fafafa',
            mb: 3,
          }}
        >
          {!method && (
            <Typography color='text.secondary'>
              Select payment method
            </Typography>
          )}

          {method === 'mpesa' && (
            <Box sx={{ textAlign: 'center' }}>
              {/* Fake QR */}
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  backgroundColor: '#eee',
                  borderRadius: 2,
                  mb: 2,
                }}
              />

              <Typography variant='body2' color='text.secondary'>
                Scan to pay with M-Pesa
              </Typography>
            </Box>
          )}

          {method === 'card' && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 1 }}>
                Tap Card
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                Please tap your card on the terminal
              </Typography>
            </Box>
          )}
        </Box>

        {/* Action */}
        <Button
          fullWidth
          disabled={!method}
          onClick={onSuccess}
          sx={{
            'height': 56,
            'borderRadius': 3,
            'backgroundColor': '#d32f2f',
            'color': '#fff',
            'fontWeight': 600,
            '&:disabled': {
              backgroundColor: '#ccc',
              color: '#777',
            },
          }}
        >
          Confirm Payment
        </Button>
      </Box>
    </Modal>
  );
}
