import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, logout, refreshToken } from "./authThunk";

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
        onRefreshToken(state,action){
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken
        }
    },
    extraReducers: {
        [logout.fulfilled]: (state,action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
            state.refreshToken = null;
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
            state.token = null;
            state.userData = {};
            state.refreshToken = null;
        },
        [refreshToken.fulfilled]: (state,action) => {
            console.log("Refreshed Token")
            const { token, refreshToken } = action.payload
            state.token = token;
            state.refreshToken = refreshToken;
        },
        [refreshToken.rejected]: (state,action) => {
            console.log("Rejected Refresh")
            state.accessToken = null;
            state.refreshToken = null;
            state.loading = false;
            state.userData = {};
        }

    }
})

export const authActions = authSlice.actions;
export default authSlice;