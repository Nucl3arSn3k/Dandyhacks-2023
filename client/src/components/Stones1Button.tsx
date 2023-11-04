import { Box, Button, ButtonProps, useBoolean } from "@chakra-ui/react";
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
}

export const Stones1Button = ({
  headerProps,
  children,
  height = 100,
  width = 400,
}: Props) => {
  const [hover, setHover] = useBoolean();
  const widthPixels = `${width}px`;
  const heightPixels = `${height}px`;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { y: [0, 5, -5, 0] }, { duration: 0.5 });
    };
    if (hover) {
      animation();
    }
  }, [hover, scope]);

  return (
    <Box as="span" ref={scope}>
      <Button
        pos="relative"
        w={widthPixels}
        h={heightPixels}
        variant="ghost"
        _hover={{ bg: "transparent" }}
      >
        <BoldedHeader {...headerProps}>{children}</BoldedHeader>
        <Image 
          onMouseOver={setHover.on}
          onMouseLeave={setHover.off}
          src="/assets/stones/stone1.png"
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
