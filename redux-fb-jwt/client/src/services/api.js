import axios from 'axios'
import { getToken, setToken,setRefreshToken, getRefreshToken } from '../utils/Helper'
import { refresJWTToken } from '../components/store/authThunk'

const baseUrl = 'http://localhost:3001/'

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

// api.interceptors.request.use(
//     async(config) => {

//        const token = getToken();
//        if(token){
//         config.headers["Authorization"] = token;
//        }
      
//         return config
//     },(error) => {
//       console.log(error)
//       Promise.reject(error)
//     }
//   )

// api.interceptors.request.use(
//     async (config) => {
//       const accessToken = getToken();
  
//       if (accessToken) {
//         config.headers = {
//           ...config.headers,
//           authorization: `Bearer ${accessToken}`,
//         };
//       }
  
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const config = error?.config;
  
//       if (error?.response?.status === 403 && !config?.sent) {
//         config.sent = true;
  
//         const result = await refresJWTToken();

//         console.log(result)
//         if (result?.accessToken) {
//           config.headers = {
//             ...config.headers,
//             authorization: `Bearer ${result?.accessToken}`,
//           };
//         }
  
//         return axios(config);
//       }
//       return Promise.reject(error);
//     }
//   );
  


//   api.interceptors.response.use(
//     (response) => {
//       return response
//     },
//     (error) => {
//       return new Promise((resolve) => {
//         const originalRequest = error.config
//         const refreshToken = getRefreshToken()
//         if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest && refreshToken) {
//           originalRequest._retry = true
  
//           const response = fetch('http://localhost:3001/refresh', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               token: refreshToken,
//             }),
//           })
//             .then((res) => res.json())
//             .then((res) => {
//               setToken(res.accessToken)
//               return axios(originalRequest)
//             })
//           resolve(response)
//         }
  
//         return Promise.reject(error)
//       })
//     },
//   )
  

export default api;