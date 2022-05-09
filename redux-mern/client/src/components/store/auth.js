import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuth: false
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){

        },
        logout(state){

        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;