import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import BackgroundMusic from "@/components/BackgroundMusic";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider>
      <BackgroundMusic />
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/android-chrome-512x512.png"
        />
      </Head>
      <SessionProvider session={session}>
        <NextTopLoader />
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default App;
