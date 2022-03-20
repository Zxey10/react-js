import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const storedUserInfo = localStorage.getItem("isLoggedIn");
        if (storedUserInfo === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    function loginHandler() {
        setIsLoggedIn(true)
        localStorage.setItem("isLoggedIn", "1");
    }

    function logoutHandler() {
        setIsLoggedIn(false)
        localStorage.removeItem("isLoggedIn");
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;