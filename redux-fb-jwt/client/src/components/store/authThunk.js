import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, setToken, removeToken } from "../../utils/Helper";
import api from "../../services/api";
import { authActions } from "./auth";

export const fetchUserData = createAsyncThunk(
    "auth/fetchUserData",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const accessToken = getToken();
            //api.defaults.headers.Authorization = `Bearer ${accessToken}`;
            const res = await api({
                method: 'GET',
                url: '/user',
                headers: {
                    Authorization: `Bearer` + accessToken
                },
            })
            console.log(res.data)
            return { ...res.data, accessToken }
        } catch (error) {
            removeToken()
            return rejectWithValue('')
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (payload, { dispatch }) => {
        const res = await api.post('/login', payload);
        setToken(res.data.accessToken)
        if(getToken()){
            dispatch(authActions.loginUser())
        }
        return res.data;
    }
)

export const logout = createAsyncThunk(
    'auth/signOut',
    async () => {
        removeToken();
    }
)
