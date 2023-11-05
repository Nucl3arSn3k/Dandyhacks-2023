import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { Box, Button } from "@chakra-ui/react";

export default function BackgroundMusic() {
  const [playSound, setPlaySound] = useState(false);
  let sound = new Howl({
    src: ["assets/sounds/BackgroundMusic.mp3"],
    loop: false,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  });

  useEffect(() => {
    if (!playSound) {
      sound.play();
    } else {
      sound.pause();
      sound.unload();
    }
  }, [playSound]);

  return (
    //use HTML TO ADD AUDIO
    <Box position="absolute" top="10" left="10" zIndex={100}>
      <Button onClick={() => setPlaySound(!playSound)}>Play</Button>
    </Box>
  );
}
