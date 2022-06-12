/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/WaterBottle.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <mesh geometry={nodes.WaterBottle.geometry} material={materials.BottleMat} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/WaterBottle.gltf')
