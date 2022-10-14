import {
  AuthProvider, ProfileProvider, ThemeProvider, ToastProvider,
} from "context";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <ThemeProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </ThemeProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default MyApp;
