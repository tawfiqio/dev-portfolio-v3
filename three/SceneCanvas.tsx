import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function SceneCanvas() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 5]} />
      <OrbitControls />
      {/* You can load a GLTF model here */}
    </Canvas>
  )
}
