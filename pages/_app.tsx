  AuthProvider,
  ThemeProvider,
  ToastProvider,
  CartProvider,
} from "context";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
