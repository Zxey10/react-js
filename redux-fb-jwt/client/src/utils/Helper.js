const getToken = () => {
    return localStorage.getItem('token');
}

const setToken = (val) => {
    localStorage.setItem('token', val)
}

const removeToken = () => {
    localStorage.removeItem('token');
}

const getRefreshToken = () => {
    return localStorage.getItem('refresh_token')
}

const setRefreshToken = (val) => {
    localStorage.setItem('refresh_token',val)
}

const removeRefreshToken = () => {
    localStorage.removeItem('refresh_token')
}

export {
    getToken,
    setToken,
    removeToken,
    getRefreshToken,
    setRefreshToken,
    removeRefreshToken
}