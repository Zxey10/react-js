import React, { useState } from 'react'
import styles from './ExpenseForm.module.scss'
import { Container } from 'react-bootstrap'
import useInput from '../hooks/use-input'

export default function ExpenseForm() {

  const [showItems,setShowItems] = useState(false)  

  function handleFormSubmit(){

  }  

  return (
    <Container fluid className={styles.new}>
    <div className={styles.form}>
      <div className="">
        <h1 className="text-light text-center mb-5">Create New Expense</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-floating">
          <input
            //value={email//Value}
            type="text"
            className='form-control'
            id="floatingInput1"
            placeholder="name@example.com"
            required
            // onChange={emailOnChange}
            // onBlur={emailOnBlur}
          />
          <label htmlFor="floatingInput1">Expense Name</label>
         
        </div>
        <div className="form-floating">
          <input
            //value={password//Value}
            type="date"
            className='form-control'
            id="floatingPassword"
            placeholder="Password"
            required
            // onChange={passwordOnChange}
            // onBlur={passwordOnBlur}
          />
          <label htmlFor="floatingPassword">Date</label>
         
        </div>
        <div className="form-floating d-flex justify-content-center align-items-center">
          <input
            //value={password//Value}
            type="text"
            className='form-control'
            id="floatingPassword"
            placeholder="Password"
            required
            // onChange={passwordOnChange}
            // onBlur={passwordOnBlur}
          />
          <label htmlFor="floatingPassword">Items</label> 
          <button className={styles.addBtn}>+</button> 
        </div>
        <div className="form-floating form-group">
          <textarea
            //value={password//Value}
            type="text"
            className={`form-control ${styles.textarea}`}
            id="floatingArea"
            required
            rows={5}
            // onChange={passwordOnChange}
            // onBlur={passwordOnBlur}
          />
          <label htmlFor="floatingArea">Notes</label>
         
        </div>
        <div className="d-flex justify-content-between mt-3 align-items-center">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </Container>
  )
}
