import React, { useReducer, useEffect, useCallback } from 'react'
import AuthContext from './auth-context'

const initialToken = localStorage.getItem('token')

let logoutTimer;

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const defaultState = {
    isLoggedIn: initialToken === null ? false : true,
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

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const expTime = new Date(expirationTime).getTime();

    const remainingDuration = expTime - currentTime;

    return remainingDuration;
}

const retrieveStoredTime = () => {
    const storedExpirationTime = localStorage.getItem('expirationTime')
    const storedToken = localStorage.getItem('token')

    const remainingTime = calculateRemainingTime(storedExpirationTime)

    if(remainingTime <= 60000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    }
}

export default function AuthProvide(props) {
    const [authState,dispatch] = useReducer(authReducer,defaultState)
    const tokenData = retrieveStoredTime()
    
    const logout = useCallback(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        dispatch({
            type: 'LOGOUT', 
            token: ''
        })

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }

    },[])

    const login = (token, expirationTime) => {
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        const remainingTime = calculateRemainingTime(expirationTime)
        dispatch({
            type: 'LOGIN',
            token
        })
        logoutTimer = setTimeout(logout,remainingTime)        
    }

    useEffect(() => {
       if(tokenData){
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logout,tokenData.duration) 
       }               
    },[tokenData, logout])
    
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
