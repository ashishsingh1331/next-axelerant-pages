import type { AppProps } from "next/app";
// Wraps all component
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
