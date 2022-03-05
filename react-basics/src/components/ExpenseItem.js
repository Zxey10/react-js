import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {

  return (
    <div className='expense-item'>
        <ExpenseDate date={props.expense.date}/>
        <div className='expense-item__description'>
            <h2>{props.expense.title}</h2>
            <div className='expense-item__price'>{props.expense.amount}</div>
        </div>
    </div>
  )
}
