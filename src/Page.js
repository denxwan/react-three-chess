import React, { useRef, useState, Suspense } from 'react';
import './Page.scss';

import { Canvas, useFrame } from '@react-three/fiber';

import { softShadows, OrbitControls } from '@react-three/drei';

import { useSpring, a } from '@react-spring/three';

// import theatre dependencies
import { studio } from '@theatre/studio'; 
//import * as core from '@theatre/core';
import { getProject } from '@theatre/core';



// Model
import Model from './components/Three/Figure';

// Lights
import Lights from './components/Three/lights';
import { ClampToEdgeWrapping, CubeReflectionMapping, DoubleSide, RepeatWrapping, TextureLoader, UVMapping } from 'three';


softShadows();

const Figure = ({position, args, color}) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}>
        {/* <boxBufferGeometry attach='geometry' args={args} /> */}
        {/* <meshStandardMaterial attach='material' color={color} /> */}
        <Model/>
    </a.mesh>
  );
};

const Ring = () => {
  const texturePainting = new TextureLoader().load( 'logo512.png');
  // texturePainting.mapping = RepeatWrapping;
  texturePainting.offset.set=(1, 0);
  // texturePainting.rotation.set=(0.1);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <ringGeometry
        attach='geometry'
        args={[100, 200, 64]}
        />
      <meshBasicMaterial
        attach='material'
        color='white'
        side={DoubleSide}
        map={texturePainting}
      />
    </mesh>
  );
};

// const Text = () => {
//   <h1 style="position: absolute;">testing</h1>
// }

function Page() {

  return (
    // <>
    // <Canvas shadows colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
    //   <ambientLight intensity={0.3} />
    //   <directionalLight 
    //     castShadow
    //     position={[0, 10, 0]}
    //     intensity={1.5}
    //     shadow-mapSize-width={1024}
    //     shadow-mapSize-height={1024}
    //     shadow-camera-far={50}
    //     shadow-camera-left={-10}
    //     shadow-camera-right={10}
    //     shadow-camera-top={10}
    //     shadow-camera-bottom={-10}
    //   />
    //   <pointLight position={[-10, 0, -20]} intensity={0.5}/>
    //   <pointLight position={[0, -10, 0]} intensity={1.5}/>

    //   {/* plane to cast shadows */}
    //   <group>
    //     <mesh
    //     receiveShadow
    //     rotation={[-Math.PI / 2, 0, 0]}
    //     position={[0, -3, 0]}>
    //       <planeBufferGeometry attach='geometry' args={[100, 100]} />
    //       <shadowMaterial attach='material' color='black' opacity={0.3}/>
    //     </mesh>

    //     <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue'/>
    //     {/* <SpinningMesh position={[-2, 1, -5]} color='pink'/>
    //     <SpinningMesh position={[5, 1, -2]} color='pink'/> */}
    //   </group>

    //   <OrbitControls />
    // </Canvas>
    // </>
    <>
      {/* <h1>literally me</h1> */}
      <Canvas
        ColorManagement={true}
        shadows
        // camera={{ position: [-250, 280, 200], fov: 40 }}
        camera={{ position: [500, -300, 600], fov: 15 }}
      >
        {/* <Text /> */}
        
        <Lights />
        <Suspense fallback={null}>
          {/* <Model /> */}
          <Figure position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue'/>
        </Suspense>

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {/* <ringGeometry
            attach='geometry'
            args={[100, 200, 64]}
            />
          <meshBasicMaterial
            attach='material'
            color='white'
            side={DoubleSide}
            map={'logo512.png'}/> */}
        </mesh>

        <Ring />
        <OrbitControls/>

      </Canvas>
    </>
  );
}

export default Page;
