// pages/_app.js
import { Button, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useState, useEffect, use } from "react";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Howl, Howler } from "howler";

function App({ Component, pageProps }: AppProps) {
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

  return (
    <ChakraProvider>
      <Button onClick={onPlaySound}>Play</Button>
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
