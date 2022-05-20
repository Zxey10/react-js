import React from 'react';
import styles from './App.module.scss'
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Quotes from './pages/Quotes';
import Quote from './pages/Quote';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import Comments from './pages/Comments';
import QuoteEdit from './pages/QuoteEdit';


function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' replace />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/quotes/:id' element={<Quote />}>
          <Route path='comments' element={<Comments/>}/>
        </Route>
        <Route path='/quotes/:id/edit' element={<QuoteEdit />} />  
        <Route path='/quotes/new' element={<NewQuotes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
