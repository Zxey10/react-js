import React from 'react'
import styles from './Login.module.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container fluid className={styles.login}>
        <div className={styles.form}>
           <div className=''>
             <h1 className='text-light text-center mb-5'>Login</h1>
           </div>
        <form>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <button className='btn btn-primary'>Login</button>
                <Link className='' to='/register'><button className='btn btn-warning text-white'>Register here</button></Link>
            </div>
        </form>
        </div>
    </Container>
  )
}