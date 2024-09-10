"use client"

import Experience from '@/components/Experience'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Canvas className=' bg-black h-full w-full '>
        <OrbitControls/>
        {/* <color attach="background" args={["#E2EAF4"]} /> */}
        <fog attach="fog" args={["#E2EAF4", 10, 20]} />
        <ambientLight />
        <Experience />
      </Canvas>
    </div>
  )
}

export default page