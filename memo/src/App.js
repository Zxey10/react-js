import React, { useState, useCallback, useMemo } from 'react';
import Demo from './components/UI/Button/Demo';
import Button from './components/Button';
import DemoList from './components/DemoList';

import './App.css';

function App() {

  let arr = useMemo(() => {
    return [1,6,23,99,16];
  },[])

  const [isVisible,setIsVisible] = useState(false)
  const [allow,setAllow] = useState(false); 
  const [listTitle,setListTitle] = useState('My list');

  const clickHandler = useCallback(() => {
    if(allow){
      setIsVisible(prev => !prev); 
      console.log('LOL');
    }
  },[allow]);

  const allowHandler = () => {
    setAllow(true)
  }
  
  const changeTitleHandler = useCallback(() => {
    setListTitle('New title')
  },[])

  return (
    <div className="app">
      <Demo show={isVisible}/>
      <DemoList title={listTitle} items={arr} />
      <Button onClick={allowHandler}>Allow Toggling</Button>
      <Button onClick={clickHandler}>Toggle Paragraph</Button>
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
}

export default App;
