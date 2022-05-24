import { useReducer, useCallback } from "react"

const httpReducer = (state,action) => {
    if(action.type === 'SEND'){
        return {
            data: null,
            status: 'pending',
            error: null
        }
    }
    if(action.type === 'SUCCESS'){
        return {
            data: action.responseData,
            error: null,
            status: 'completed'
        }
    }
    if(action.type === 'ERROR'){
        return {
            data: null,
            status: 'error',
            error: action.errorMsg
        }
    }
}

export const useHttp = (requestFunction , startWithPending = false) => {

    const [httpState,dispatch] = useReducer(httpReducer,{
        data: null,
        error: null,
        status: startWithPending ? 'pending' : null
    })

    const sendReq = useCallback(
        async function(reqConfig) {
        dispatch({type: 'SEND'});
        try {
            const res = await requestFunction(reqConfig);
            dispatch({type: 'SUCCESS' , responseData: res})
        } catch (error) {
            dispatch({type: 'ERROR' , errorMsg: error.message})
        }
       },[requestFunction])
    return {
        sendReq,
        ...httpState
    }
}