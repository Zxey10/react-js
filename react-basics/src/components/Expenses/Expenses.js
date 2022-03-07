import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'


export default function Expenses({expenses}) {

  function onAddExpenseFilter(data){
    console.log(data);
  }

  return (
   <div>
     <ExpensesFilter addExpenseFilter={onAddExpenseFilter}/>
      <Card className="expenses">
         {expenses.map(expense => (
         <ExpenseItem key={expense.id} expense={expense}/>
      ))}   
    </Card>
   </div>
  )
}
