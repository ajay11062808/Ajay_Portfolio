import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Email = () =>  {
  const email = useGLTF("./email/result.gltf");

  return (
    <primitive object={email.scene} scale={11.5} position-x={0} position-y={-2} rotation-y={0} />
  );
};

const EmailCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
       {/* Global soft light */}
        <ambientLight intensity={3} />

        {/* Multiple directional lights */}
        <directionalLight position={[5, 5, 5]} intensity={6} />
        <directionalLight position={[-5, -5, -5]} intensity={4} />

        {/* Extra soft lighting */}
        <pointLight position={[0, 5, 0]} intensity={2} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Email />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EmailCanvas;
