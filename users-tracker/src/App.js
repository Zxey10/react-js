import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Popup from './components/Popup';
import './App.css';

function App() {

  const [errorText,setErrorText] = useState('');
  const [users,setUsers] = useState([
    {id:1 , username:'User 1',age:32}
  ])

  const [isPopupVisible,setIsPopupVisible] = useState(false)

  function onCreateUser(user){


    if(user.username.trim().length === 0){
      //Invalid
      setErrorText('Username can\'t be empty');
      setIsPopupVisible(true);
      return;
    }
    if(user.age <= 0){
      //Invalid
      setErrorText('Age must be > 0')
      setIsPopupVisible(true);
      return;
    }

    setUsers(prevUsers => {
      return [...prevUsers,user]
    })
  }

  function onDismisPopup(){
    setIsPopupVisible(false)
  }

  return (
   <div className='App'>
     <Popup className={!isPopupVisible ? 'hidden': ''} closePopup={onDismisPopup} errorText={errorText}/>
     <UserForm createUser={onCreateUser}/>
     <UserList users={users}/>
   </div>
  );
}

export default App;
