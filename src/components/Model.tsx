import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Html } from "@react-three/drei";

const Model = ({ url, side }) => {
  const ref = useRef();
  const { scene } = useLoader(GLTFLoader, url);

  // This will run on every frame and rotate the model
  useFrame(() => {
    if (ref.current) {
      if (side === "left") {
        // ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01; // Rotation around the Y-axis
        // ref.current.rotation.z += 0.01;
      } else {
        // ref.current.rotation.x -= 0.01;
        ref.current.rotation.y -= 0.01; // Rotation around the Y-axis
        // ref.current.rotation.z -= 0.01;
      }
    }
  });

  return <primitive object={scene} ref={ref} dispose={null} />;
};

const ModelComponent = ({ url, side, isSmallScreen }) => {
  const width = isSmallScreen ? "60vw" : "40vw";
  const height = isSmallScreen ? "20vh" : "50vh";
  return (
    <Canvas
      style={{ width: width, height: height }}
      camera={{ position: [0, 150, 0] }}
    >
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <directionalLight position={[0, 0, 0]} intensity={1} />

      <OrbitControls enableZoom={false} />
      <Suspense fallback={<Html>loading..</Html>}>
        <Model url={url} side={side} />
      </Suspense>
    </Canvas>
  );
};

export default ModelComponent;
