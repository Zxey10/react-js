import React from 'react';
import styles from './App.module.scss'
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Quotes from './pages/Quotes';
import Quote from './pages/Quote';
import NewQuotes from './pages/NewQuotes';

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='quotes' replace />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/quotes/new' element={<NewQuotes />} />
        <Route path='/quotes/:id' element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
