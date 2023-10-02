import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Earth = () => {

  const earth = useGLTF('./earth/scene.gltf')
  return (
    
    <mesh>
      <directionalLight 
        intensity={1}
        
      />
      <spotLight 
        position={[0, 0, -3]}
        castShadow
      />
      <primitive 
      object={earth.scene}
      scale={0.005}
      position-y={0}
      rotation-y={0}
      />

    </mesh> 
    
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{ fov:16, near: 0.2, far: 200, position: [-3, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas