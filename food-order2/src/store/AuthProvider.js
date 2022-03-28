import React,{ useReducer } from 'react'
import { AuthContext } from './auth-context'

const defaultAuthState = {
    isLoggedIn: false
}

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    SAVE_LOGIN: 'SAVE_LOGIN',
}

const authReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
            let logged = false;
            if(action.email.includes('@') && action.password.trim().length > 3){
                logged = true;
                console.log('LOGGED IN');
            }
            return {
                isLoggedIn: logged
            }
        case ACTIONS.SAVE_LOGIN:
            return {
                isLoggedIn: action.logged
            }
        case ACTIONS.LOGOUT:
            localStorage.removeItem('isLoggedIn')
            return {
                isLoggedIn: false
            }    
    default:
        console.log('lol');
        break;
    }    
    return defaultAuthState;
}

 const AuthProvider = props => {
 
    const [authState,dispatchAuth] = useReducer(authReducer,defaultAuthState);

    const loginHandler = (email,password) => {
        dispatchAuth({
            type: ACTIONS.LOGIN,
            email,
            password
        })
    }

    const saveLogin = (logged) => {
        dispatchAuth({
            type: ACTIONS.SAVE_LOGIN,
            logged
        })
    }

    const logoutHandler = () => {
        dispatchAuth({
            type: ACTIONS.LOGOUT
        })
    }

    const authContext = {
        isLoggedIn: authState.isLoggedIn,
        login: loginHandler,
        saveLogin: saveLogin,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
