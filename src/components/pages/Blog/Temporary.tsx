import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

function Sphere(props: any) {
  const meshRef = useRef()

  const [color, setColor] = useState(getRandomColor())

  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={0.5}
      onPointerOver={e => setColor(getRandomColor())}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color={color} roughness={0.2} />
    </mesh>
  )
}

export function Temporary() {
  return (
    <Canvas className='bg-black' style={{ height: 500 }}>
      <pointLight position={[0, -30, 0]} decay={0} intensity={2} />

      <Sphere position={[0, 0, -30]} />
    </Canvas>
  )
}
