"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { GeistMono } from "next/font/google"
import { useRef } from "react"

const geistMono = GeistMono({ subsets: ["latin"] }).className

function RotatingTriangle() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} scale={1}>
      <coneGeometry args={[0.5, 1, 3]} />
      <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} wireframe={true} />
    </mesh>
  )
}

function CenterContent() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
      <RotatingTriangle />
    </Canvas>
  )
}

export default function Component() {
  return (
    <div className={`w-full h-screen bg-black text-white ${geistMono} flex flex-col`}>
      {/* Fixed Navigation Bar */}
      <nav className="bg-black border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                HOME
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                ABOUT
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative">
        {/* Background Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)]"
          style={{ backgroundSize: "40px 40px" }}
        />

        <div className="relative z-10 flex items-center space-x-8">
          <div className="w-32 h-32">
            <CenterContent />
          </div>
          <p className="text-gray-400 hover:text-cyan-400 transition-colors text-xl tracking-wider">
            WELCOME TO PROJECT LLC
          </p>
        </div>
      </main>
    </div>
  )
}

