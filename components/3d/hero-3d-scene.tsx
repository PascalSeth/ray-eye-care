"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function FloatingEye() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.3} roughness={0.4} />
        <mesh position={[0, 0, 0.8]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#1E40AF" />
          <mesh position={[0, 0, 0.2]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </mesh>
      </mesh>
    </Float>
  )
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  const helixPoints = []
  for (let i = 0; i < 100; i++) {
    const angle = (i / 100) * Math.PI * 8
    const x = Math.cos(angle) * 2
    const z = Math.sin(angle) * 2
    const y = (i / 100) * 10 - 5
    helixPoints.push(new THREE.Vector3(x, y, z))
  }

  return (
    <group ref={groupRef} position={[4, 0, -2]}>
      {helixPoints.map((point, index) => (
        <Float key={index} speed={1 + index * 0.01} rotationIntensity={0.5}>
          <mesh position={[point.x, point.y, point.z]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#10B981" : "#3B82F6"} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function MedicalCross() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={[-4, 2, -1]}>
        <mesh>
          <boxGeometry args={[0.5, 3, 0.5]} />
          <meshStandardMaterial color="#EF4444" metalness={0.2} roughness={0.8} />
        </mesh>
        <mesh>
          <boxGeometry args={[3, 0.5, 0.5]} />
          <meshStandardMaterial color="#EF4444" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const particleCount = 200
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* <bufferAttribute args= attach="attributes-position" count={particleCount} array={positions} itemSize={3} /> */}
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60A5FA" transparent opacity={0.6} />
    </points>
  )
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#10B981" />

          <FloatingEye />
          <DNAHelix />
          <MedicalCross />
          <ParticleField />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
