import React, { useReducer } from 'react'
import UserContext from './user-context'

const defaultUserState = {
    users: []
}

const ACTIONS = {
    ADD_USER: 'ADD'
}

const userReducer = (state,action) => {
    let updatedUsers;
    if(action.type === ACTIONS.ADD_USER){
        updatedUsers = [...state.users,action.user]
    }
    return {
        users: updatedUsers
    }
}

export default function UserProvider(props) {

  const [usersState,dispatchUsers] = useReducer(userReducer,defaultUserState)

  const addUserHandler = (user) => {
    dispatchUsers({
        type:'ADD',
        user: user
    })
  }
  
  const userContext = {
    users: usersState.users,
    addUser: addUserHandler
  }

  return (
    <UserContext.Provider value={userContext}>
       {props.children}
    </UserContext.Provider>
  )
}
