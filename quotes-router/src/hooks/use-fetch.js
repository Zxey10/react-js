import { useState } from "react"
export default function useFetch(applyData) {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const sendRequest = async (reqConfig) => {
        setError(null)
        setIsLoading(true)
        try {
            const res = await fetch(reqConfig.url,{
                method: reqConfig.method || 'GET',
                headers : reqConfig.headers || {},
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null
            })

            if(!res.ok) throw new Error(`${reqConfig.method} Request Failed`)

            const json = await res.json();
            console.log(json)

            //applyData(json)

        } catch (error) {
            setError(error.message)
            console.log(error)
        }
        setIsLoading(false)
    }

    return {
        sendRequest,
        error,
        isLoading
    }
}
