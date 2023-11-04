import {
  Box,
  Button,
  ButtonProps,
  HeadingProps,
  useBoolean,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { BoldedHeader, BoldedHeaderProps } from "./BoldedHeader";
import { useAnimate } from "framer-motion";

interface Props {
  height?: number;
  width?: number;
  stone?: "stone1" | "stone3" | "stone2" | "stone4" | "stone5" | "stone6" | "stone7";
  children?: ReactNode;
  buttonProps?: ButtonProps;
  headerProps?: HeadingProps & { shadowOffset?: number };
  size?: "lg" | "sm";
  isAnimationOff?: boolean;
}

export const StonesButton = ({
  buttonProps,
  headerProps,
  children,
  stone = "stone1",
  height = 100,
  width = 400,
  isAnimationOff = false,
  boxProps
}: Props) => {
  const [hover, setHover] = useBoolean();
  const widthPixels = `${width}px`;
  const heightPixels = `${height}px`;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { y: [0, 5, -5, 0] }, { duration: 0.5 });
    };
    if (!isAnimationOff && hover) {
      animation();
    }
  }, [hover, scope]);

  return (
    <Box
      as="span"
      ref={scope}
      onMouseOver={setHover.on}
      onMouseLeave={setHover.off}
      {...boxProps}
    >
      <Button
        pos="relative"
        w={widthPixels}
        h={heightPixels}
        variant="ghost"
        _hover={{ bg: "transparent" }}
        {...buttonProps}
      >
        <BoldedHeader {...headerProps}>{children}</BoldedHeader>
        <Image
          src={`/assets/stones/${stone}.png`}
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: widthPixels,
            height: heightPixels,
            position: "absolute",
            filter: hover ? "brightness(90%)" : "",
          }}
        />
      </Button>
    </Box>
  );
};
