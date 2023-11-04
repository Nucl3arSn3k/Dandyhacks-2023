import Image from "next/image";
import React from "react";

export const SeaBackgroundFullScreen = () => {
  return (
    <Image
      src="/assets/background/ocean_bg.png"
      alt="Background"
      width="0"
      height="0"
      sizes="100vw"
      style={{
        width: "100%",
        height: "100vh",
        zIndex: -1,
        position: "absolute",
      }}
    />
  );
};
