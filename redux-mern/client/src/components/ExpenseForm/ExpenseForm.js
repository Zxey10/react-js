import React, { useRef, useState } from 'react'
import styles from './ExpenseForm.module.scss'
import { Container } from 'react-bootstrap'
import useInput from '../hooks/use-input'
import ItemList from '../Items/ItemList'

export default function ExpenseForm() {

  const [expensesItems, setExpensesItems] = useState([])
  const expenseItem = useRef()

  function addExpenseTask() {
    if (expenseItem.current.value.trim().length <= 0){
      console.log("empty")
      return;
    }
    
    setExpensesItems(prev => [...prev, {
      id: Math.random(),
      name: expenseItem.current.value
    }])
    expenseItem.current.value = null;
  }

  function handleFormSubmit() {

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
            // required
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
            // required
            // onChange={passwordOnChange}
            // onBlur={passwordOnBlur}
            />
            <label htmlFor="floatingPassword">Date</label>

          </div>
          <div className="form-floating d-flex justify-content-center align-items-start flex-column">
            <div className='form-floating d-flex justify-content-center align-items-center w-100'>
              <input
                //value={password//Value}
                ref={expenseItem}
                type="text"
                className='form-control'
                id="floatingPassword"
                placeholder="Password"
              // required
              // onChange={passwordOnChange}
              // onBlur={passwordOnBlur}
              />
              <label htmlFor="floatingPassword">Items</label>
              <button type='button' onClick={addExpenseTask} className={styles.addBtn}>+</button>
            </div>
            {expensesItems.length > 0 && <ItemList expensesItems={expensesItems} />}
          </div>
          <div className="form-floating form-group">
            <textarea
              //value={password//Value}
              type="text"
              className={`form-control ${styles.textarea}`}
              id="floatingArea"
              // required
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
