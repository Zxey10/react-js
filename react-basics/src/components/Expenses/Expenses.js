import React,{ useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'


export default function Expenses({expenses,onGetSortedExpenses}) {

  const [yearSelected,setYearSelected] = useState('2021')  

  function onAddExpenseFilter(year){
    setYearSelected(year)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  })

  function sortExpenses(expenses){
    expenses.sort(function(a,b){return new Date(a.date) - new Date(b.date)})
    onGetSortedExpenses(expenses)
  }

  return (
   <div>
      <Card className="expenses">
      <ExpensesFilter expenses={expenses} selected={yearSelected} addExpenseFilter={onAddExpenseFilter} onSortExpenses={sortExpenses}/>
         {filteredExpenses.map(expense => (
         <ExpenseItem key={expense.id} expense={expense}/>
      ))}   
    </Card>
   </div>
  )
}
