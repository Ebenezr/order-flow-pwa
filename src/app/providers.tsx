'use client';

import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Client from '@/graphql/apolloConfigs/Client';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={Client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
