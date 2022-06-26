const getToken = () => {
    return localStorage.getItem('token');
}

const setToken = (val) => {
    localStorage.setItem('token', val)
}

const removeToken = () => {
    localStorage.removeItem('token');
}

export {
    getToken,
    setToken,
    removeToken
}