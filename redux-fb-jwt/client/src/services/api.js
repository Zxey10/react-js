import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const api = axios.create({
    baseURL: baseUrl
})

export default api;