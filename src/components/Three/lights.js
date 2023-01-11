import React from "react";

const Lights = () => {
    return (
        <>
            <ambientLight intensity={.4}/>
            <directionalLight 
                castShadow
                position={[-8, 16, -8]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}/>
            <pointLight position={[0, 50, 0]} intensity={10}/>

            <pointLight position={[100, 50, 100]} intensity={10}/>
        </>
    );
}
 
export default Lights;