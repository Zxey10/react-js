import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Popup from './components/Popup';
import './App.css';

function App() {

  const [users,setUsers] = useState([
    {id:1 , username:'User 1',age:32}
  ])

  function onCreateUser(user){
    setUsers(prevUsers => {
      return [...users,user]
    })
  }

  return (
   <div className='App'>
     <Popup></Popup>
     <UserForm createUser={onCreateUser}/>
     <UserList users={users}/>
   </div>
  );
}

export default App;
