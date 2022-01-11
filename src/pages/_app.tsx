import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../layouts/Main';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
