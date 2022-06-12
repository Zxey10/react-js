import React, { Suspense, useRef, useState, useEffect, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import styles from "./App.module.css";
import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import Model from "./components/Planet";


function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let id;
    if(!loaded){
      id = setTimeout(() => {setLoaded(true)},2000); 
    }
    return () => {
      clearTimeout(id)
    }
  },[])

  return (
    <div className={styles.App}>
      <h1>3D Website</h1>
      
      {/* <Canvas className={styles.canvas} style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className={styles.canvas} style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas> */}
      <Canvas className={styles.canvas} style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {<Suspense fallback={null}>
          <Model />
        </Suspense>}
      </Canvas>
    </div>
  );
}

export default App;
