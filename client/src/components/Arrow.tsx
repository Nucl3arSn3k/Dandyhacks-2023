import { Box, useBoolean } from "@chakra-ui/react";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent({ isHovered = false }: { isHovered?: boolean }) {
  const fileUrl = "/assets/3d/direction_arrow/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y -= isHovered ? 0.1 : 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export const Arrow = () => {
  const [hover, setHover] = useBoolean();

  return (
    <div
      className="flex justify-center items-center h-screen"
      onMouseOver={setHover.on}
      onMouseLeave={setHover.off}
    >
      <Canvas className="h-2xl w-2xl">
        <Suspense fallback={null}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent isHovered={hover} />
        </Suspense>
      </Canvas>
    </div>
  );
};
