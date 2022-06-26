import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, logout } from "./authThunk";

const initialToken = localStorage.getItem('token')

const initialAuthState = {
    token: initialToken,
    loading: false,
    userData: {},
    isAuth: initialToken ? true : false
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers: {
        loginUser(state){
            console.log("LOGIN")
            state.isAuth = true
        },
    },
    extraReducers: {
        [logout.fulfilled]: (state,action) => {
            state.loading = false;
            state.userData = {}
            state.token = null;
        },
        [login.fulfilled]: (state,action) => {
            const { user, accessToken } = action.payload;
            state.loading = false;
            state.token = accessToken
            state.userData = user
        },
        [login.pending]: (state,action) => {
            state.loading = true;
        },
        [login.rejected]: (state,action) => {
            state.loading = false;
        },
        [fetchUserData.fulfilled]: (state,action) => {
            const { user, accessToken } = action.payload;
            state.loading = false;
            state.token = accessToken
            state.userData = user
        },
        [fetchUserData.pending]: (state,action) => {
            state.loading = true;
        },
        [fetchUserData.rejected]: (state,action) => {
            console.log('ERROR')
            state.loading = false;
            state.token = null;
            state.userData = {};
        }

    }
})

export const authActions = authSlice.actions;
export default authSlice;