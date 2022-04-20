import { useState } from "react";

export const useFetch = (transformData) => {

    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false);

    const sendRequest = async(reqConfig) => {
        isLoading(true)
        setError(null)
        try {
            const res = await fetch(reqConfig.url,{
                method:reqConfig.method || 'GET',
                headers:reqConfig.headers || {},
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null
            })
            
            if(!res.ok) throw new Error('Something went wrong')
    
            const json = await res.json();

            //transformData(json);

        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }


    return {
        sendRequest,
        isLoading,
        error
    }
}