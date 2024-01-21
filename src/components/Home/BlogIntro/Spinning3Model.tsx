import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

interface CoffeeObjectProps {
  modelPath: string
  positionY?: number
  rotationY?: number
  shouldRotate?: boolean
}

const Model: React.FC<CoffeeObjectProps> = ({
  modelPath,
  positionY = 0,
  rotationY = 0,
  shouldRotate = true,
}) => {
  const { scene } = useGLTF(modelPath)
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current && shouldRotate) {
      ref.current.rotation.y = clock.getElapsedTime()
    }
  })

  return (
    <primitive
      object={scene}
      ref={ref}
      position-y={positionY}
      rotation-y={rotationY}
    />
  )
}

const Spinning3Model: React.FC<CoffeeObjectProps> = props => {
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
      <Model {...props} />

      <Preload all />
    </Canvas>
  )
}

export { Spinning3Model }
