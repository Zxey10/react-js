import React from 'react'
import Button from './Button'

export default function LoginForm() {

  function emailHandler() {

  }

  function passwordHandler(){

  }

  function submitHandler(e){
    e.preventDefault();

  }

  return (
    <form onSubmit={submitHandler}>
      <label for='email'>Email</label>
      <input type='email' id='email' onChange={emailHandler}></input>

      <label for='password'>Password</label>
      <input type='password' id='password' onChange={passwordHandler}></input>
      <Button type='submit'>Submit</Button>
    </form>
  )
}
