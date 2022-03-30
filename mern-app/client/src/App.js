import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
