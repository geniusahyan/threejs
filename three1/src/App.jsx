import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color={"hotpink"} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App