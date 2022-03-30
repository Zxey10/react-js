import React, { useEffect ,useState, useRef } from 'react'
import axios from 'axios'

export default function Home() {

  const url = 'http://localhost:3001/home'
  const [serverData,setServerData] = useState([])
  const userRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    getReqFromServer(url)
  },[])

  useEffect(() => {
    console.log(serverData);
  },[serverData])

  async function getReqFromServer(url){
    const options = {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await fetch(url,options)
    const json = await res.json()
    setServerData(json.users)
  }

  async function createNewUser_(url,name,age){
    const data = {name,age}
    const options = {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      data:JSON.stringify(data)
    }
    const res = await axios(url,options)
    const user = res.data.userData;
    setServerData(prevData => [...prevData,user])
    
  }

  function submitUser(e){
    e.preventDefault()

    const name = userRef.current.value;
    const age = ageRef.current.value;

    if(name.trim().length === 0) return
    if(age < 0) return
    
    createNewUser_(url,name,age)
    

  }

  return (
    <div>
      <ul>
        {serverData.map(user => (
          <li key={Math.random()}>{user.name} is {user.age} years old</li>
        ))}

        <form onSubmit={submitUser}>
          <label htmlFor="user">Username</label>
          <input type="text" name='name' id='user' ref={userRef}/><br />
          <label htmlFor="age">Age</label>
          <input type="number" name='age' id="age" ref={ageRef} />
          <button type='submit'>Create User</button>
        </form>
      </ul>
    </div>
  )
}
