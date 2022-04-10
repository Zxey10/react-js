import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqCongif) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(reqCongif.url, {
        method: reqCongif.method || "GET",
        headers: reqCongif.headers || {},
        body: reqCongif.body ? JSON.stringify(reqCongif.body) : null,
      });

      if (!res.ok) throw new Error(`${reqCongif.method ? reqCongif.method : 'GET'} REQ FAILED`);

      const json = await res.json();

      applyData(json)

    } catch (error) {
        setError(error.message)
    }
    setIsLoading(false)
  },[applyData]);

  return {
      isLoading,
      error,
      sendRequest
  };
};

export default useHttp;
