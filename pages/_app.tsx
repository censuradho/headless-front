import { SessionProvider } from "next-auth/react";

import {
  AuthProvider,
  ThemeProvider,
  ToastProvider,
  CartProvider,
} from "context";

import type { AppProps } from "next/app";

function MyApp({
  Component,
  pageProps: {
    session,
    ...pageProps
  },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
