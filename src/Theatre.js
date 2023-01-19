import * as THREE from 'three'
import {createRoot} from 'react-dom/client'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {getProject} from '@theatre/core'
import './Theatre.scss';
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import { TextureLoader } from 'three'
//import { PerspectiveCamera } from '@react-three/fiber'

studio.initialize()
studio.extend(extension)


// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

// loading texture
const lineTexture = new TextureLoader().load('line.png');


const Theatre = () => {
  return (
    <Canvas>
        <SheetProvider sheet={demoSheet}>
          {/* main camera */}
            <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75}/>

            {/* secondary camera */}
            <PerspectiveCamera theatreKey="SecondaryCamera" position={[5, 5, -5]} fov={75}/>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            {/* <e.mesh theatreKey='Cude'>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="orange"/>
            </e.mesh> */}
            <e.mesh theatreKey='Street'>
                <ringGeometry args={[0.7, 2, 40]}/>
                <meshPhongMaterial color="#2e4272"/>
            </e.mesh>
            {/* <e.mesh theatreKey='StreetLines'>
                <ringGeometry args={[1.95, 2, 128]}/>
                <meshStandardMaterial color="White"/>
            </e.mesh> */}

            <e.group theatreKey='MainLineTextureGroup'>
              <e.group theatreKey='Group'>
                <e.mesh theatreKey='StreetLineTexture1'>
                    <planeGeometry />
                    <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group2'>
                <e.mesh theatreKey='StreetLineTexture2'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group3'>
                <e.mesh theatreKey='StreetLineTexture3'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group4'>
                <e.mesh theatreKey='StreetLineTexture4'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group5'>
                <e.mesh theatreKey='StreetLineTexture5'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group6'>
                <e.mesh theatreKey='StreetLineTexture6'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group7'>
                <e.mesh theatreKey='StreetLineTexture3'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
              <e.group theatreKey='Group7'>
                <e.mesh theatreKey='StreetLineTexture7'>
                      <planeGeometry />
                      <meshStandardMaterial color="White" map={lineTexture} alphaTest/>
                </e.mesh>
              </e.group>
            </e.group>
        </SheetProvider>
    </Canvas>
  )
}

export default Theatre;
