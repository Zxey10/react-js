import React, { useState } from "react";

const AuthContext = React.createContext({})

export const AuthContextProvider = (props) => {

    const [items,setItems] = useState([]);
    const [size,setSize] = useState(0)

    const itemsContext = {
        items:items,
        addItem: (meal) => {
            setItems(prevItems => [...prevItems,meal])
        },
        size: size,
        addOnSize: (number) => {
            setSize(prevSize => prevSize + +number)
        }
    }

    return <AuthContext.Provider value={itemsContext}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthContext;