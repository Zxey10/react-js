import React, { useContext } from 'react'
import UserContext from '../store/user-context'

export default function ShowUsers(props) {

    const userCtx = useContext(UserContext);

    function showUsers(){
        userCtx.getUsers();
    }

    return (
    <div>
      <h1>Show All Users</h1>
      <button onClick={showUsers}>Fetch the users</button>
      {userCtx.users.length === 0 && <p>No users</p>}
      <ul>
        {userCtx.users.length > 0 && userCtx.users.map(user => (
            <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
