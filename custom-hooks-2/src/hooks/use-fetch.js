import { useState } from 'react'

const useFetch = async(method_) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  try {
    if(method_ === 'GET'){
        const res = await fetch('https://react-test-242e7-default-rtdb.firebaseio.com/tasks.json')
        
        if(!res.ok){
            throw new Error('Get req failed')
        }

        const json = await res.json();

        console.log(json);
    }else if(method_ === 'POST'){
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
    }  
  } catch (error) {
      console.log(error.message || 'Something went wrong');
  }  

}

export default useFetch;