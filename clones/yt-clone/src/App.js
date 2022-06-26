import React,{ Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import './sass/index.scss'

function App() {
  return (
    <div className='mainDiv'>
      <Header />
      <main className='main'>
        <h1>Lol</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
