import React from 'react'

const UserContext = React.createContext({
    users: [],
    addUser: (user) => {},
    getUsers: () => {}
})

export default UserContext