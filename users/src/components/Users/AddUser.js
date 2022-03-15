import React, { useState } from 'react'
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error,setError] = useState('')

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function ageHandler(e) {
        setAge(e.target.value)
    }

    function errorHandler(){
        setError(null)
    }

    function addUserHandler(e) {
        e.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title:"Invalid Input",
                message:"Inputs are empty"
            })
            return;
        }

        if (+age < 1) {
            setError({
                title:"Invalid Input",
                message:"Age can't be < 0"
            })
            return
        }

        console.log(username);
        console.log(age);

        const user = {
            name: username,
            age: age,
            id: Math.random().toString()
        }

        props.addNewUser(user);

        setUsername('')
        setAge('')
    }
    

    return (
        <div>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type='text' value={username} onChange={usernameHandler}></input>

                    <label htmlFor="age">Age</label>
                    <input id='age' type='number' value={age} onChange={ageHandler}></input>

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}
