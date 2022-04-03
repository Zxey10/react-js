import React from 'react'

const UserContext = React.createContext({
    users: [],
    addUser: (user) => {}
})

export default UserContext