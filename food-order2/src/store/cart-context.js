import React from 'react'

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    orders: 0,
    sendOrder: () => {}
})

export default CartContext