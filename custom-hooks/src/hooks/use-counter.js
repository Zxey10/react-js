import  { useEffect, useState } from 'react'

const useCounter = (param) => {
const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + param);
    }, 1000);

    return () => clearInterval(interval);
  }, [param]);
  return counter
}

export default useCounter;