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
import { authActions } from "./auth";


export const fetchUserData = createAsyncThunk(
    "auth/fetchUserData",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const accessToken = getToken();
            //api.defaults.headers.Authorization = `Bearer ${accessToken}`;
            if(!accessToken) return
            const res = await api({
                method: 'GET',
                url: '/user',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })
            console.log(res.data)
            return { ...res.data }
        } catch (error) {
            removeToken()
            removeRefreshToken()
            return rejectWithValue('')
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (payload, { dispatch }) => {
        try {
            const res = await api.post('/login', payload);
            console.log(res.data)
            setToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            dispatch(authActions.loginUser())
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const refreshToken = createAsyncThunk(
    "auth/refresh",
    async () => {
        try {
            const refreshToken = getRefreshToken()
            const res = await api.post('/refresh', { token: refreshToken })
            setToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            return {
                token: res.data.accessToken,
                refreshToken: res.data.refreshToken
            }
        } catch (error) {
            console.log(error)
        }
    }
)

export const refresJWTToken = async () => {
    try {
        const refreshToken = getRefreshToken()
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
export const logout = createAsyncThunk(
    'auth/signOut',
    async () => {
        removeToken();
        removeRefreshToken();
    }
)
