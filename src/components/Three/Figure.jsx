/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 public/figure.glb
Author: Tiko (https://sketchfab.com/tikoavp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fashion-figure-base-644b113218b94c94b5f07be0b6f455a3
Title: Fashion Figure Base
*/

import React, { useRef } from 'react'
import { MeshDistortMaterial, useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../../../figure.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} position={[0, -50, 0]}>
        <mesh geometry={nodes.Shoe001_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Body002_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Arm001_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Torus005_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100}/>
        <mesh geometry={nodes.Retopo_Mesh007_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere001_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <MeshDistortMaterial
            //meshStandardMaterial
            attach='material'
            color={'#ffffff'}
            //color={'#39ff14'}
            emissive={'#000000'}
            roughness={1}
            wireframe={true}
            wireframeLinewidth={2}
            speed={3}
			      factor={0.6}
          />
        </mesh>
        
      </group>
    </group>
  )
}

useGLTF.preload('../../../figure.glb')
