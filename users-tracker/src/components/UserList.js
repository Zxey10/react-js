import React from 'react'
import User from './User'
import './UserList.css'

export default function UserList({users}) {
  return (
    <div>
      {users.map(user => (
         <User key={user.id} user={user}/>
      ))}
    </div>
  )
}
