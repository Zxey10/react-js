import React from 'react';
import styles from './App.module.css';
import DayList from './components/Day/DayList';

function App() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Task Tracker</h1>
      <DayList />
    </div>
  );
}

export default App;
