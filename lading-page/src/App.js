import React,{ Fragment } from 'react'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Layout>
  );  
}

export default App;
