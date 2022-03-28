import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/auth-context';
import styles from './Login.module.css'


export default function Login() {

  const authContext = useContext(AuthContext)

  const userRef = useRef();
  const passwordRef = useRef();
  

  function onLogin(e){
    e.preventDefault();
    authContext.login(userRef.current.value, passwordRef.current.value)
  }

  return (
   <div className={styles.login}>
      <form onSubmit={onLogin}>
      <label htmlFor="email">Email</label>
      <input ref={userRef} type="email" autoComplete='off' id='email'/>
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="password" id='password'/>
      <button type='submit'>Login</button>
    </form>
   </div>
  )
}
