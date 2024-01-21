import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const CoffeeObject = () => {
  const coffee = useGLTF('/src/assets/3dmodels/cup/scene.gltf')
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime()
    }
  })

  return (
    <primitive object={coffee.scene} ref={ref} position-y={0} rotation-y={0} />
  )
}

const Coffee = () => {
  return (
    <Canvas
      style={{ height: 500 }}
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        autoRotateSpeed={10}
      />

      <spotLight position={[0, 0, 200]} decay={0} intensity={5} />
      <spotLight position={[0, 0, -200]} decay={0} intensity={5} />
      <spotLight position={[200, 0, 0]} decay={0} intensity={5} />
      <spotLight position={[-200, 0, 0]} decay={0} intensity={5} />
      <CoffeeObject />

      <Preload all />
    </Canvas>
  )
}

export { Coffee }
