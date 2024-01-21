import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const BananaObject = () => {
  const Banana = useGLTF('/src/assets/3dmodels/banana/scene.gltf')
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime()
    }
  })

  return (
    <primitive object={Banana.scene} ref={ref} position-y={0} rotation-y={0} />
  )
}

const Banana = () => {
  return (
    <Canvas
      style={{ height: 500 }}
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 20] }}
    >
      <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={10} />

      <spotLight position={[0, 0, 200]} decay={0} intensity={5} />
      <spotLight position={[0, 0, -200]} decay={0} intensity={5} />
      <spotLight position={[200, 0, 0]} decay={0} intensity={5} />
      <spotLight position={[-200, 0, 0]} decay={0} intensity={5} />
      <BananaObject />

      <Preload all />
    </Canvas>
  )
}

export { Banana }
