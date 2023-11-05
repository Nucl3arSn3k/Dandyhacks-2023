import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { useRef } from "react";
import { StonesButton } from "./StonesButton";
import { Box } from "@chakra-ui/react";
import { set } from "lodash";
// import audio from "/assets/sounds/BackgroundMusic";
export default function BackgroundMusic() {
  const sound = useRef(null); // Use a ref to store the Howler sound object
  const isPlaying = useRef(false); // Use a ref to track if the sound is currently playing
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Initialize the sound when the component mounts
    sound.current = new Howl({
      src: ["../assets/sounds/BackgroundMusic.mp3"],
      loop: false,
      volume: 0.5,
      onend: function () {},
    });
  }, []);

  const onPlaySound = () => {
    if (sound.current) {
      if (!isPlaying.current) {
        setIsMuted(false);
        sound.current.play();
      } else {
        setIsMuted(true);
        sound.current.pause();
      }
      isPlaying.current = !isPlaying.current;
    }
  };

  return (
    <Box
      position="absolute"
      bottom="30px"
      left="30px"
      zIndex={1000}
      display="flex"
      flexDirection="column"
    >
      <StonesButton
        stone="stone1"
        width={150}
        height={70}
        buttonProps={{
          onClick: () => {
            onPlaySound();
          },
        }}
        headerProps={{ fontSize: "1em", shadowOffset: 2 }}
      >
        {isMuted ? "Play Music" : "Pause Music"}
      </StonesButton>
    </Box>
  );
}
