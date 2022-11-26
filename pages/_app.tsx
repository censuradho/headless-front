import {
  AuthProvider,
  ThemeProvider,
  ToastProvider,
  CartProvider,
} from "context";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
