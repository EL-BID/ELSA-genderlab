import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

import { ELSAHeader, Prevenciometro } from '@/components';
import { FormContextProvider } from '@/context';
import { theme } from '../theme';

export const metadata = {
  title: 'ELSA Semáforo',
  description: 'ELSA Semáforo',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body
        style={{
          backgroundColor: '#7c6aa3',
        }}
      >
        <MantineProvider theme={theme}>
          <NavigationProgress />
          <ELSAHeader />
          <Prevenciometro />
          <FormContextProvider>
            <Container size="md">{children}</Container>
          </FormContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
