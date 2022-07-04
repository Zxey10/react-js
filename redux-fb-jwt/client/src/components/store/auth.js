import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, logout, refreshTokenThunk } from "./authThunk";

const initialToken = localStorage.getItem('token')
const initialRefreshToken = localStorage.getItem('refresh_token')

const initialAuthState = {
    token: initialToken,
    loading: false,
    userData: {},
    isAuth: initialToken ? true : false,
    refreshToken: initialRefreshToken
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers: {
        loginUser(state){
            console.log("LOGIN")
            state.isAuth = true
        },
        onRefreshToken(state, action){
            const { accessToken, refreshToken } = action.payload;
            state.token = accessToken;
            state.refreshToken = refreshToken
        }
    },
    extraReducers: {
        [logout.fulfilled]: (state,action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        },
        [login.fulfilled]: (state,action) => {
            const { user, accessToken, refreshToken } = action.payload;
            state.loading = false;
            state.token = accessToken
            state.userData = user
            state.refreshToken = refreshToken
        },
        [login.pending]: (state,action) => {
            state.loading = true;
        },
        [login.rejected]: (state,action) => {
            console.log("Login rejected")
            state.loading = false;
        },
        [fetchUserData.fulfilled]: (state,action) => {
            const { user } = action.payload;
            state.loading = false;
            state.userData = user
            
        },
        [fetchUserData.pending]: (state,action) => {
            state.loading = true;
        },
        [fetchUserData.rejected]: (state,action) => {
            console.log('ERROR')
            state.loading = false;
            state.userData = {};
            state.token = null;
            state.refreshToken = null;
        },
        [refreshTokenThunk.fulfilled]: (state,action) => {
            const { accessToken, refreshToken } = action.payload;
            state.token = accessToken;
            state.refreshToken = refreshToken;
        }
        
    }
})

export const authActions = authSlice.actions;
export default authSlice;