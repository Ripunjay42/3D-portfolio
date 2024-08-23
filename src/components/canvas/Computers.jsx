import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState, Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import Loader from '../Loader'

const Computers = ({ isMobile, mini }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <pointLight intensity={1} />
      <hemisphereLight 
        intensity={0.15} 
        groundColor='black' />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? (mini ? 0.25 : 0.35) : 0.53}
        position={isMobile ? [0, -2.2, -0.5] : [0, -3.2, -1.35]}
        rotation={isMobile?[-0.001, 0.6, -0.14]:[-0.001, 0.3, -0.1]}
          />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mini, setMini] = useState(false);

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia('(max-width: 1200px)');
    const mediaQueryMini = window.matchMedia('(max-width: 650px)');

    setIsMobile(mediaQueryMobile.matches);
    setMini(mediaQueryMini.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    const handleMediaQueryChangeMini = event => {
      setMini(event.matches);
    };

    mediaQueryMobile.addEventListener('change', handleMediaQueryChange);
    mediaQueryMini.addEventListener('change', handleMediaQueryChangeMini);

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaQueryChange);
      mediaQueryMini.removeEventListener('change', handleMediaQueryChangeMini);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} mini={mini} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;