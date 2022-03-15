import React, { useState } from 'react'
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './App.css';

function App() {

  const [users,setUsers] = useState([]);

  function onAddNewUser(user){
    setUsers(prev => {
      return [...prev,user]
    })
  }

  return (
    <div>
      <AddUser addNewUser={onAddNewUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
