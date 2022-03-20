import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  useEffect(() => {
    console.log(email,password);
  },[email,password])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <input>
        </input>
      </header>
    </div>
  );
}

export default App;
