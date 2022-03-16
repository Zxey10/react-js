import React, { useState , Fragment } from 'react'
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
    <Fragment>
      <AddUser addNewUser={onAddNewUser}/>
      <UserList users={users}/>
    </Fragment>
  );
}

export default App;
