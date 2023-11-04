import { Box, useBoolean } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent({ isHovered = false }: { isHovered?: boolean }) {
  const fileUrl = "/assets/3d/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const [isRotatingLeft, setIsRotatingLeft] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsRotatingLeft((prev) => !prev);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    mesh.current.rotation.x = 290;
    mesh.current.rotation.y = 30;
  }, []);

  useFrame(() => {
    if (isRotatingLeft) {
      mesh.current.rotation.z += isHovered ? 0.05 : 0.01;
      mesh.current.rotation.x += isHovered ? 0.05 : 0.01;
      mesh.current.rotation.y -= isHovered ? 0.0005 : 0.0001;
    } else {
      mesh.current.rotation.z -= isHovered ? 0.05 : 0.01;
      mesh.current.rotation.x -= isHovered ? 0.05 : 0.01;
      mesh.current.rotation.y += isHovered ? 0.0005 : 0.0001;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Arrow() {
  const [hover, setHover] = useBoolean();

  return (
    <div
      className="flex justify-center items-center h-screen"
      onMouseOver={setHover.on}
      onMouseLeave={setHover.off}
    >
      <Canvas className="h-2xl w-2xl">
        <OrbitControls />
        {/* <ambientLight intensity={10} /> */}
        <pointLight position={[10, 10, 10]} />
        <MeshComponent isHovered={hover} />
      </Canvas>
    </div>
  );
}

const Map = () => {
  return (
    <Box as="section" pos="relative" h="100vh" w="100vw">
      <Box w="900px" height="800px" pos="relative" mx="auto" overflow="clip">
        <Box pos="absolute" top="60%" left="15%">
          <Arrow />
        </Box>
        <Image
          src="/assets/background/bg_in_spyglass.png"
          alt="Background"
          width="0"
          height="0"
          sizes="100vw"
          unoptimized={true}
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Map;
