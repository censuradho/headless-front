import { ProfileProvider, ThemeProvider } from "context";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProfileProvider>
  );
}

export default MyApp;
