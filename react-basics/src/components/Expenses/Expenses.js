import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
export default function Expenses({expenses}) {
  return (
    <Card className="expenses">
         {expenses.map(expense => (
         <ExpenseItem key={expense.id} expense={expense}/>
      ))}   
    </Card>
  )
}
