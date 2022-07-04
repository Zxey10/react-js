import store from '../components/store/index'
import axios from 'axios'
import { getToken, setToken, setRefreshToken, getRefreshToken } from '../utils/Helper'
import { refresJWTToken, refreshTokenThunk } from '../components/store/authThunk'
import { authVerify } from '../components/store/authThunk'
import jwtDecode from 'jwt-decode'

const baseUrl = 'http://localhost:3001/'

const api2 = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

api2.interceptors.request.use(
    async (config) => {

    let accessToken = store.getState().auth.token;
    let currentDate = new Date();

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        await store.dispatch(refreshTokenThunk())
        if (config?.headers) {
          config.headers["authorization"] = `Bearer ${
            store.getState().auth.token
          }`;
        }
      }
    }
    return config;
    },
    (error) => Promise.reject(error)
);



export default api2;