// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/android-chrome-512x512.png"
        />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
