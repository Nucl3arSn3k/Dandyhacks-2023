import Image from "next/image";
import React from "react";
import { ChakraMotionDiv } from "./ChakraMotionDiv";

export const SeaBackgroundFullScreen = () => {
  return (
    <Image
      src="/assets/background/ocean_bg_large.png"
      alt="Background"
      width="0"
      height="0"
      sizes="100vw"
      unoptimized={true}
      style={{
        width: "100%",
        height: "100vh",
        zIndex: -1,
        position: "absolute",
        objectFit: "cover",
      }}
    />
  );
};
