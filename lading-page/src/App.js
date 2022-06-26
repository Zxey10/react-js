import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import './sass/index.scss'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>   
    </Layout>
  );  
}

export default App;
