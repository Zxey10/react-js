import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialCartState,
    reducers:{
        addToCart(state,action){
            let item = action.payload.item;
            let exists = state.items.find(itm => itm.id === item.id)
            if(!exists){
                state.items.push(item)
            }else{
                exists.amount++;
                exists.totalPrice = exists.totalPrice + item.price;
            }
        },
        removeFromCart(state,action){
            if(action.payload.item.amount > 1){
                let foundItem = state.items.findIndex(item => action.payload.item.id === item.id)
                state.items[foundItem].amount--;
                state.items[foundItem].totalPrice -= state.items[foundItem].price;
            }else{
                state.items = state.items.filter(item => item.id !== action.payload.item.id)
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;