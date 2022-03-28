import React from 'react'

export const AuthContext = React.createContext({
    isLoggedIn: false,
    login:(email,password) => {},
    saveLogin: () => {},
    logout: () => {}
})