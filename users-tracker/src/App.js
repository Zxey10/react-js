import React, { useState, useRef } from 'react';
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

  const div = useRef(null);

  function onDismisPopup(){
    setIsPopupVisible(false)
  }

  const addAnim = () => {
    div.current.classList.add("anim");
  };




  return (
   <div className='App'>
     {/* <Popup className={!isPopupVisible ? 'hidden': ''} closePopup={onDismisPopup} errorText={errorText}/>
     <UserForm createUser={onCreateUser}/>
     <UserList users={users}/> */}

     <div ref={div} className='rect'>

     </div>

     <button onClick={addAnim}>Play Anim</button>

   </div>
  );
}

export default App;
