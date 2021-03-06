import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0,
    orders: 0
}

const ACTIONS = {
    addItem : 'ADD_ITEM',
    removeItem : 'REMOVE_ITEM',
    order: 'ORDER',
    finishOrder: 'ORDER_DONE',
    clearCart: 'CLEAR'
}

const cartReducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.addItem:
            
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
            
            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;

            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat(action.item)
            }

            const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
            
            return {
                items: updatedItems,
                totalAmount: newTotalAmount,
                orders: state.orders
            }
        case ACTIONS.removeItem:            
            const existingCartItemIndex2 = state.items.findIndex(item => item.id === action.id)
            const existingItem2 = state.items[existingCartItemIndex2]
            const updatedTotalAmount = state.totalAmount - existingItem2.price
            let updatedItems2;
            if(existingItem2.amount === 1){
                updatedItems2 = state.items.filted(item => item.id !== action.id)
            }else{
                const updatedItem2 = {...existingItem2,amount: existingItem2.amount - 1}
                updatedItems2 = [...state.items]
                updatedItems2[existingCartItemIndex2] = updatedItem2
            }
            return {
                items: updatedItems2,
                totalAmount: updatedTotalAmount,
                orders: state.orders
            }
        case ACTIONS.order:
            return {
                items: state.items,
                totalAmount: state.totalAmount,
                orders: state.orders + 1
            }
        case ACTIONS.finishOrder:
            const interval = setTimeout(() => {
                console.log(`Order ${state.orders} Done`);
            },5000)
            //clearTimeout(interval)
            console.log('Preparing Order');

            return{
                ...state,
                orders: state.orders - 1
            }
        case ACTIONS.clearCart:
            return {
                ...state,
                items: [],
                totalAmount: 0
            }            
        default:
            break;
    }
    return defaultCartState;
}


export default function CartProvider(props) {

  const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState) 

  const addItemHandler = (item) => {
    dispatchCartAction({
        type: 'ADD_ITEM',
        item: item
    });
  }
  
  const removeItemHandler = (id) => {
    dispatchCartAction({
        type: 'REMOVE_ITEM',
        id: id
    });
  } 

  const sendOrderHandler = () => {
      dispatchCartAction({
          type: ACTIONS.order
      });
  }
  
  const finishOrder = () => {
      dispatchCartAction({
          type: 'ORDER_DONE'
      })
  }

  const cleanCart = () => {
      dispatchCartAction({
          type: 'CLEAR'
      })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    orders: cartState.orders,
    sendOrder: sendOrderHandler,
    finishOrder: finishOrder,
    clearCart : cleanCart
  }  

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
