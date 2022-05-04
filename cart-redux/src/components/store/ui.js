import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    initialState: { cartIsVisible: false, notification: null },
    name: 'ui',
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state,action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;