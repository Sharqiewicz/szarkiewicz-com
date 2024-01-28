import { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

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
  rotationY = 90,
}) => {
  const gltf = useGLTF(modelPath)
  const ref = useRef<THREE.Object3D>()

  useEffect(() => {
    gltf.scene.traverse(object => {
      if (!object.isMesh) return
      const {
        map,
        emissiveMap,
        bumpMap,
        normalMap,
        specularMap,
        alphaMap,
        envMap,
      } = object.material
      const maps = [
        map,
        emissiveMap,
        bumpMap,
        normalMap,
        specularMap,
        alphaMap,
        envMap,
      ]
      maps.forEach(texture => {
        if (texture) {
          texture.minFilter = THREE.LinearMipmapLinearFilter
          texture.generateMipmaps = true
        }
      })
    })
  }, [gltf])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime()
    }
  })

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      position-y={positionY}
      rotation-z={90}
      rotation-x={5}
      rotation-y={-185}
      position-z={-50}
    />
  )
}

const Spinning3Model: React.FC<CoffeeObjectProps> = props => {
  return (
    <Canvas
      style={{ height: 300, width: 300 }}
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      {...props.canvasOptions}
    >
      <spotLight position={[0, 0, 5]} decay={0} intensity={50} />
      <Suspense fallback={<Loading />}>
        <Model {...props} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export { Spinning3Model }
