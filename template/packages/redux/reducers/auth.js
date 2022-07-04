import updateObject from '../updateObject';

import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOG_OUT,
} from '../actions/auth';

const initialState = {
    loading: false,
    token: null,
    error: null,
};

export function authStart(state, action) {
    return updateObject(state, {
        loading: true,
    });
}

export function authSuccess(state, action) {
    return updateObject(state, {
        token: action.token,
        loading: false,
    });
}

export function authFailed(state, action) {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
}

export function logOut(state, action) {
    return updateObject(state, {
        token: null,
    });
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_START: return authStart(state, action);
        case AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_FAILED: return authFailed(state, action);
        case LOG_OUT: return logOut(state, action);
        default: return state;
    }
}