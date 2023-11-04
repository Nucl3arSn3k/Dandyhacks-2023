import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  useBoolean,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { BoldedHeader, BoldedHeaderProps } from "./BoldedHeader";
import { useAnimate } from "framer-motion";

interface Props {
  height?: number;
  width?: number;
  children?: ReactNode;
  buttonProps?: ButtonProps;
  headerProps?: BoldedHeaderProps;
  boxProps?: BoxProps;
  rotation?: number; // Add a rotation prop
}

export const ArrowStone = ({
  boxProps = {},
  headerProps,
  children,
  height = 100,
  width = 400,
  rotation = 0, // Default rotation value
}: Props) => {
  const [hover, setHover] = useBoolean();
  const widthPixels = `${width}px`;
  const heightPixels = `${height}px`;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (hover) {
      scope.current.style.transition = "transform 0.5s";
      scope.current.style.transform = "scaleY(1.1)";
    } else {
      scope.current.style.transition = "transform 0.5s";
      scope.current.style.transform = "scaleY(1)";
    }
  }, [hover]);

  return (
    <Box
      as="span"
      ref={scope}
      onMouseOver={setHover.on}
      onMouseLeave={setHover.off}
      zIndex={1}
      {...boxProps}
    >
      <Button
        pos="relative"
        w={widthPixels}
        h={heightPixels}
        variant="ghost"
        _hover={{ bg: "transparent" }}
        zIndex={0}
      >
        <BoldedHeader {...headerProps}>{children}</BoldedHeader>
        <Image
          src="/assets/stones/stone7.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: widthPixels,
            height: heightPixels,
            position: "absolute",
            filter: hover ? "brightness(90%)" : "",
            transform: `rotate(${rotation}deg)`, // Set rotation based on the prop
          }}
        />
      </Button>
    </Box>
  );
};
