import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Sphere(props: any) {
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 0.25 : 0.5}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color={hovered ? 'aqua' : 'black'} />
    </mesh>
  )
}

export function Temporary() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Sphere position={[0, 0, -10]} />
    </Canvas>
  )
}
