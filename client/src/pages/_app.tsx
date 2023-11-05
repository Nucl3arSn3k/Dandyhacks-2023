import { Button, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import BackgroundMusic from "@/components/BackgroundMusic";
<<<<<<< HEAD



function App({ Component, pageProps }: AppProps) {
=======
import { Howl, Howler } from "howler";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  let playSound = false;

  const sound = new Howl({
    src: ["assets/sounds/BackgroundMusic.mp3"],
    loop: false,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  });

  const onPlaySound = () => {
    console.log(sound);
    if (!playSound) {
      sound.play();
    } else {
      sound.pause();
    }
    playSound = !playSound;
  };

>>>>>>> a73d5ddffb98d0a8a99bc2f0321bc767457f6924
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
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default App;
