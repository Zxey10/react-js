import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from './components/Planet';
import './App.css'

function App() {

  return (
    <div className="App">
      <Canvas style={{ height: "500px" }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {<Suspense fallback={null}>
          <Model />
        </Suspense>}
      </Canvas>
       
    </div>
  )
}

export default App
