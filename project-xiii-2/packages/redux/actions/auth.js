import axios from 'axios';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOG_OUT = 'LOG_OUT';

export function authStart() {
    return {
        type: AUTH_START,
    };
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token: token
    };
}

export function authFailed(error) {
    return {
        type: AUTH_FAILED,
        error: error,
    };
}

export function logOut() {
    localStorage.clear();

    setTimeout(() => {
        window.location.reload();
    }, 1000);

    return {
        type: LOG_OUT,
    };
}

export function authInProcess(payload) {
    return dispatch => {
        dispatch(authStart());
        let AUTH_URL = `${process.env.REACT_APP_API_KEY}/connect/?host=${payload.host}&user=${payload.user}&password=${payload.password}&database=${payload.database}`;

        axios.get(AUTH_URL)
            .then(response => {
                const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : response.data.token;
                localStorage.setItem('authToken', authToken);
                dispatch(authSuccess(authToken));

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch(error => {
                if (error.response) {
                    dispatch(authFailed(error.response.data.message))
                } else if (error.request) {
                    dispatch(authFailed("Webserver is unavailable..."))
                }
            });
    };
}

export function checkInProcess() {
    return dispatch => {
        dispatch(authStart());

        if (localStorage.getItem("authToken")) {
            let AUTH_URL = `${process.env.REACT_APP_API_KEY}/connect/?token=${localStorage.getItem('authToken')}`;

            axios.get(AUTH_URL)
                .then(response => {
                    if (response.data.status) {
                        const authToken = localStorage.getItem('authToken');
                        dispatch(authSuccess(authToken));
                    }
                    else {
                        localStorage.clear();
                        dispatch(authFailed("Relog needed!"));

                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                })
                .catch(error => dispatch(authFailed(error)));
        }
    };
}