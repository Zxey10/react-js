import { useState, useCallback } from "react";

const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback(async (reqConfig) => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(reqConfig.url,{
              method: reqConfig.method,
              headers: reqConfig.headers ? reqConfig.headers : {},
              body: reqConfig.body ? JSON.stringify(reqConfig.body) : null
          });
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          applyData(data,reqConfig.body)
          
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      },[applyData]);
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHttp;