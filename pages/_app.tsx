import { ProfileProvider, ThemeProvider, ToastProvider } from "context";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <ThemeProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </ProfileProvider>
  );
}

export default MyApp;
