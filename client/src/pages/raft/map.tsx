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
    setTimeout(() => {
      setIsRotatingLeft((prev) => !prev);
    }, 1000);
  }, []);

  useEffect(() => {
    mesh.current.rotation.x = 290;
    mesh.current.rotation.y = 30;
  }, []);

  useFrame(() => {
    if (isRotatingLeft) {
      mesh.current.rotation.z += 0.01;
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y -= isHovered ? 0.1 : 0.0001;
    } else {
      mesh.current.rotation.z -= 0.01;
      mesh.current.rotation.x -= 0.01;
      mesh.current.rotation.y += isHovered ? 0.1 : 0.0001;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  const [hover, setHover] = useBoolean();

  return (
    <div
      className="flex justify-center items-center h-screen"
      onMouseOver={setHover.on}
      onMouseLeave={setHover.off}
    >
      <Canvas className="h-2xl w-2xl">
        <OrbitControls />
        <ambientLight intensity={10} />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent isHovered={hover} />
      </Canvas>
    </div>
  );
}

const Map = () => {
  return (
    <Box as="section" pos="relative">
      <Box pos="absolute">
        <Shiba />
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
          height: "100vh",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Map;
