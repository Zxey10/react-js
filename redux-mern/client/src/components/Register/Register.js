import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Register.module.scss';

export default function Register() {
  return (
    <Container fluid className={styles.register}>
        <div className={styles.form}>
           <div className=''>
             <h1 className='text-light text-center mb-5'>Register</h1>
           </div>
        <form>
             <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className='d-flex justify-content-start mt-3'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div>
    </Container>
  )
}
