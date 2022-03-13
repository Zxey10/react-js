import React,{ useState } from 'react'
import Card from '../components/Card';
import './UserForm.css'

export default function UserForm({createUser}) {

    const [username,setUsername] = useState('');
    const [age,setAge] = useState('');

    function submitHandler(e){
        e.preventDefault();

        if(username.trim().length === 0){
            //sendUsernameError();
            return;
        }

        if(age <= 0){
            //sendAgeError();
            return
        }
        
        const user = {
            username,
            age,
            id: Math.random().toString()
        }

        createUser(user)

        setUsername('');
        setAge('')
    }

    function usernameHandler(e){
        setUsername(e.target.value)
    }

    function ageHandler(e){
        setAge(e.target.value)
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input type='text' value={username} name='user' onChange={usernameHandler}></input>
                <label>Age</label>
                <input type='number' value={age} name='age' onChange={ageHandler}></input>
                <button type='submit'>Add User</button>
            </form>
        </Card>
    )
}
