import React, { useReducer, useState } from 'react'
import AuthContext from './auth-context'

const initialToken = localStorage.getItem('token')

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const defaultState = {
    isLoggedIn: initialToken === undefined ? false : true,
    token: initialToken
}

const authReducer = (state,action) => {
   if(action.type === ACTIONS.LOGIN){
    if(action.token !== '')
        return {
            isLoggedIn: true,
            token: action.token
        }
   }
   if(action.type === ACTIONS.LOGOUT){
        return {
            isLoggedIn: false,
            token: ''
        }
   }
}

export default function AuthProvide(props) {
    const [authState,dispatch] = useReducer(authReducer,defaultState)

    const login = (token) => {
        localStorage.setItem('token', token)
        dispatch({
            type: 'LOGIN',
            token
        })
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT', 
            token: ''
        })
        localStorage.removeItem('token')
    }

    const authContext = {
        isLoggedIn: authState.isLoggedIn,
        login: login,
        logout,
        token: authState.token
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}
