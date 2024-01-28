import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import { useIsDesktop } from '../hooks/useIsDesktop'

interface CoffeeObjectProps {
  modelPath: string
  positionY?: number
  rotationY?: number
  shouldRotate?: boolean
  canvasOptions?: any
}

const Loading = () => (
  <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color='orange' />
  </mesh>
)

const Model: React.FC<CoffeeObjectProps> = ({
  modelPath,
  positionY = 0,
  rotationY = 0,
  shouldRotate = true,
}) => {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Object3D>()

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
  const isDesktop = useIsDesktop()
  return (
    <Canvas
      style={{ height: 500 }}
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      {...props.canvasOptions}
    >
      {isDesktop ? (
        <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={10} />
      ) : null}

      <spotLight position={[0, 0, 200]} decay={0} intensity={5} />
      <spotLight position={[0, 0, -200]} decay={0} intensity={5} />
      <spotLight position={[200, 0, 0]} decay={0} intensity={5} />
      <spotLight position={[-200, 0, 0]} decay={0} intensity={5} />
      <Suspense fallback={<Loading />}>
        <Model {...props} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export { Spinning3Model }
