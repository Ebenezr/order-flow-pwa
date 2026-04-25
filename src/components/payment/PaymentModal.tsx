'use client';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { formatKES } from '@/utils/currency';
import {
  PROCESS_PAYMENT,
  ProcessPaymentInput,
} from '@/graphql/api/apolloClient/Mutations/Payment';
import { useMutation } from '@apollo/client/react';

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

type Props = {
  open: boolean;
  orderId: string;
  onClose: () => void;
  total: number;
  onSuccess: () => void;
};

const PAYMENT_TIMEOUT = 180;

const getTimerColor = (remainingSeconds: number) => {
  if (remainingSeconds < 30) return 'error.main';
  if (remainingSeconds < 60) return 'warning.main';
  return 'primary.main';
};

export default function PaymentModal({
  open,
  onClose,
  orderId,
  total,
  onSuccess,
}: Props) {
  const [method, setMethod] = useState<'mpesa' | 'card'>('card');
  const [timeLeft, setTimeLeft] = useState(PAYMENT_TIMEOUT);

  type ProcessPaymentResponse = {
    processPayment:
      | {
          __typename: 'PaymentTransactionResponse';
          header?: {
            customerMessage?: string;
            responseCode?: number;
          };
        }
      | {
          __typename: 'PaymentErrorResponse';
          header?: {
            customerMessage?: string;
            responseCode?: number;
          };
          body?: string | null;
        };
  };

  type ProcessPaymentVariables = {
    input: ProcessPaymentInput;
  };

  // mutation
  const [processPayment, { loading }] = useMutation<
    ProcessPaymentResponse,
    ProcessPaymentVariables
  >(PROCESS_PAYMENT, {
    onCompleted: (data) => {
      const response = data.processPayment;
      const responseCode = response?.header?.responseCode;
      const customerMessage =
        response?.header?.customerMessage ?? 'Unable to process payment.';

      if (
        response?.__typename === 'PaymentTransactionResponse' &&
        responseCode === 200
      ) {
        onSuccess();
        return;
      }

      alert(customerMessage);
    },
    onError: (error) => {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    },
  });

  const handleConfirmPayment = async () => {
    const input: ProcessPaymentInput = {
      orderId,
      amount: total,
    };

    if (method === 'card') {
      input.card = {
        method: 'CARD',
        cardNumber: '4111111111111111',
        expiry: '12/28',
        cvv: '123',
        simulateSuccess: true,
      };
    }

    if (method === 'mpesa') {
      input.mpesa = {
        method: 'MPESA',
        phone: '+254712345678',
        simulateSuccess: true,
      };
    }

    await processPayment({
      variables: { input },
    });
  };

  React.useEffect(() => {
    if (!open) return;

    setTimeLeft(PAYMENT_TIMEOUT);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert('Payment session expired. Please start payment again.');
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, onClose]);

  const progressValue = Math.max(0, (timeLeft / PAYMENT_TIMEOUT) * 100);
  const timerColor = getTimerColor(timeLeft);

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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            Checkout payment
          </Typography>

          <Box
            onClick={onClose}
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            ✕
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant='determinate'
              enableTrackSlot
              value={progressValue}
              size={90}
              thickness={3}
              sx={{
                'color': timerColor,
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
                '& .MuiCircularProgress-track': {
                  strokeLinecap: 'round',
                  opacity: 0.2,
                },
              }}
            />

            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 700 }}>
                {formatTime(timeLeft)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: timerColor,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Time left to complete payment
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
        <Box
          sx={{
            display: 'flex',
            borderRadius: 3,
            border: '1px solid #ddd',
            overflow: 'hidden',
            mb: 3,
          }}
        >
          {/* Card */}
          <Box
            onClick={() => setMethod('card')}
            sx={{
              flex: 1,
              py: 1.8,
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: 600,
              backgroundColor: method === 'card' ? '#f5f5f5' : '#fff',
              color: method === 'card' ? '#333' : '#777',
              borderRight: '1px solid #eee',
            }}
          >
            Card
          </Box>

          {/* M-Pesa */}
          <Box
            onClick={() => setMethod('mpesa')}
            sx={{
              flex: 1,
              py: 1.8,
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: 600,
              backgroundColor: method === 'mpesa' ? '#f5f5f5' : '#fff',
              color: method === 'mpesa' ? '#333' : '#777',
            }}
          >
            M-Pesa
          </Box>
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
            p: 2,
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
                  width: 160,
                  height: 160,
                  backgroundColor: '#eee',
                  borderRadius: 2,
                  mx: 'auto',
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
                Hold your card near the reader to pay
              </Typography>
            </Box>
          )}
        </Box>

        {/* Action */}
        <Button
          fullWidth
          disabled={!method || loading || timeLeft <= 0}
          onClick={handleConfirmPayment}
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
          {loading ? 'Processing...' : 'Confirm Payment'}
        </Button>
      </Box>
    </Modal>
  );
}
