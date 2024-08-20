import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState, Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import Loader from '../Loader'

const Computers = ({ isMobile }) => {
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
        scale={isMobile ? 0.35 : 0.70}
        position={isMobile ? [0, -1.3, -0.5] : [0, -3.2, -1.35]}
        rotation={isMobile?[0.02, 0.6, -0.14]:[-0.01, -0.1, -0.1]}
          />
    </mesh>
  )
}

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		//* Add a listener for changes to the screen size
		const mediaQueryMobile = window.matchMedia('(max-width: 450px)');

		//* Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQueryMobile.matches);

		//* Define a callback function to handle changes to the media query
		const handleMediaQueryChange = event => {
			setIsMobile(event.matches);
		};

		//* Add the callback function as a listener for changes to the media query
		mediaQueryMobile.addEventListener('change', handleMediaQueryChange);

		//* Remove the listener when  the component is unmounted
		return () => {
			mediaQueryMobile.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);


//   return ( isMobile ? null :
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 30, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >

//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls 
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
      
//     </Canvas>
//   )
// }
// return (
//   <>
//     {isMobile ? (
//       <></>
//     ) : (
//       <Canvas
//         frameloop="demand"
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [20, 3, 5], fov: 25 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <Computers isMobile={isMobile} />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     )}
//   </>
// );
// };

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
      <Computers isMobile={isMobile} />
    </Suspense>

    <Preload all />
  </Canvas>
);
};


export default ComputersCanvas;