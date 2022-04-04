import React, { useReducer } from 'react'
import UserContext from './user-context'
import { fetchUsers } from '../helper/fetchUsers'

const defaultUserState = {
    users: []
}

const url = 'http://localhost:3001/users'

const ACTIONS = {
    ADD_USER: 'ADD',
    FETCH_USERS: 'GET_USERS'
}

const userReducer = (state,action) => {
    let updatedUsers;
    if(action.type === ACTIONS.ADD_USER){
        updatedUsers = [...state.users,action.user]
        return {
          users: updatedUsers
      }
    }
    if(action.type === ACTIONS.FETCH_USERS){
      
      let usersFromDataBase = [...action.users]
      return {
        users: usersFromDataBase
      }
    }
    return state;
}

export default function UserProvider(props) {

  const [usersState,dispatchUsers] = useReducer(userReducer,defaultUserState)

  const addUserHandler = (user) => {
    dispatchUsers({
        type:'ADD',
        user: user
    })
  }

  const getUsersHandler = () => {
    
    fetchUsers(url)
    .then((data) => {
      console.log(data.users);
      dispatchUsers({
        type:'GET_USERS',
        users:data.users
      })
    })
    .catch(err => console.log(err))
  }
  
  const userContext = {
    users: usersState.users,
    addUser: addUserHandler,
    getUsers: getUsersHandler
  }

  return (
    <UserContext.Provider value={userContext}>
       {props.children}
    </UserContext.Provider>
  )
}
