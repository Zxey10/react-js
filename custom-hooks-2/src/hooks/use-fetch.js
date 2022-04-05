import { useState } from 'react'

const useFetch = async(method_) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks,setTasks] = useState([])

  if(method_ === 'GET'){
    setError(null);
    setIsLoading(true);
    try {
        const res = await fetch('https://react-test-242e7-default-rtdb.firebaseio.com/tasks.json')
        
        if(!res.ok){
            throw new Error('Get req failed')
        }

        const json = await res.json();
        const loadedTasks = [];

        for (const taskKey in json) {
          loadedTasks.push({ id: taskKey, text: json[taskKey].text });
        }
        
        setTasks(loadedTasks)        
        return tasks;
    } catch (error) {
      setError(error.message)
      console.log(error.message);
    }
    setIsLoading(false)
  }else if(method_ === 'POST'){
    setError(null)
    setIsLoading(true)
    try {
      const res = await fetch('https://react-test-242e7-default-rtdb.firebaseio.com/tasks.json',{
          method: 'POST',
          body: JSON.stringify({ text: 'taskText' }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if(!res.ok){
            throw new Error('Post req failed')
        }

        const json = await res.json();
        return [json,isLoading,error];
    } catch (error) {
      setError(error.message)
      console.log(error.message);
    }
    setIsLoading(false)
  }
}

export default useFetch;