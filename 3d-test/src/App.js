import './App.css';
import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from './Earth';
import Europa from './Europa';

function App() {

  const [rotations, setRotations] = useState({
    x: 0, y: 0, z: 0
  })

  function spinY() {
    setRotations(prev => {
      return {
        x: prev.x,
        y: prev.y + 1,
        z: prev.z
      }
    })
  }

  function spinX() {
    setRotations(prev => {
      return {
        x: prev.x + 1,
        y: prev.y,
        z: prev.z
      }
    })
  }
  function spinZ() {
    setRotations(prev => {
      return {
        x: prev.x,
        y: prev.y,
        z: prev.z + 1
      }
    })
  }


  return (
    <div className='mainDiv'>
      <div className='header-text'>
        <h1>React 3D Example</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum numquam fugiat dolores consequuntur quam tempora tenetur est totam iure, autem ab fuga unde vitae doloremque molestiae quos repellendus omnis!</p>
      </div>
      <div className='canvasDiv'>
        <Canvas className='canvas'>
          <Suspense fallback={null}>
            <ambientLight intensity={1} position={[3, -5, 10]} />
            <directionalLight position={[-2, 5, 2]} />
            <OrbitControls enableZoom={true} target={[0, 0, -100]} autoRotate={true} />
            <Earth rotation={rotations} />
            <Europa />
          </Suspense>
        </Canvas>
      </div>
      <div className='btns'>
        <button onClick={spinX}>Spin on X</button>
        <button onClick={spinY}>Spin on Y</button>
        <button onClick={spinZ}>Spin on Z</button>
      </div>
    </div>
  )
}

export default App;
