import React, { useContext } from 'react'
import UserContext from '../store/user-context'

export default function About() {
  
  const userCtx = useContext(UserContext)
  
  function handleAddUser(){
    let user = {
      name: 'Nmae2',
      age: Math.floor((Math.random()*100)%50)
    }
    userCtx.addUser(user)
  }

  return (
    <div>
      <button onClick={handleAddUser}>Add new User to Context</button>
      <ul>
        {userCtx.users.map(user => (
          <li key={Math.random()}>{user.name} + {user.age}</li>
        ))}
      </ul>
    </div>
  )
}
