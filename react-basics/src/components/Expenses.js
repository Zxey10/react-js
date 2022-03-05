import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
export default function Expenses({expenses}) {
  return (
    <div className="expenses">
         {expenses.map(expense => (
         <ExpenseItem expense={expense}/>
      ))}   
    </div>
  )
}
