import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ShowUsers from './components/ShowUsers';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import UserProvider from './store/UserProvider';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/users' element={<ShowUsers />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
