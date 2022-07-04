import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getToken,
    setToken,
    removeToken,
    setRefreshToken,
    getRefreshToken,
    removeRefreshToken
} from "../../utils/Helper";
import api from "../../services/api";
import api2 from "../../services/api2";
import { authActions } from "./auth";
import jwtDecode from "jwt-decode";




export const login = createAsyncThunk(
    "auth/login",
    async (payload, { dispatch }) => {
        try {
            const res = await api2.post('/login', payload);
            setToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            dispatch(authActions.loginUser())
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const refreshTokenThunk = createAsyncThunk(
    "auth/refresh",
    async (_, { dispatch, getState }) => {
        try {
            const refreshToken = getState().auth.refreshToken;
            console.log('Refresh Token' + refreshToken)
            const res = await api.post('/refresh', { token: refreshToken })
            setToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)

            return {
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken
            }
        } catch (error) {
            console.log(error)
        }
    }
)

export const refresJWTToken = async () => {
    try {
        console.log("refresh JWT")
        const refreshToken = getRefreshToken()
        const res = await api.post('/refresh', { token: refreshToken })
        setToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        console.log(res)
        console.log("refreshed JWT")
        //dispatch(authActions.onRefreshToken({...res.data.accessToken,...res.data.refreshToken}))
        return {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken
        }
    } catch (error) {
        console.log(error)
    }
}
export const logout = createAsyncThunk(
    'auth/signOut',
    async () => {
        removeToken();
        removeRefreshToken();
    }
)

export const authVerify = () => {
    console.log("Checking ...")
    let token = getToken()
    let currentDate = new Date();


    if(token){
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 < currentDate.getTime()){
            console.log('TOKEN EXPIRED')
            return true;
            //removeToken()
            //removeRefreshToken()
            // setTimeout(() => {
            //     window.location.replace('/');
            // },1000)
        }
    }
    return false;
}

export const fetchUserData = createAsyncThunk(
    "auth/fetchUserData",
    async (_, { rejectWithValue, dispatch, getState }) => {
        try {
            const accessToken = getState().auth?.token;
            console.log(accessToken)
            if(accessToken !== null){

                const res = await api2.get('/user',{
                    headers:{
                        "authorization": `Bearer ${accessToken}`
                    }
                });
                console.log(accessToken);   
                
                console.log(res.data)
                return { ...res.data }
            }else{
                throw new Error('Token is null')
            }
        } catch (error) {
            console.log(error)
            return rejectWithValue('')
        }
    }
)