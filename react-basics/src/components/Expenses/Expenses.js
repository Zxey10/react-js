import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'


export default function Expenses({ expenses, onGetSortedExpenses }) {

  const [yearSelected, setYearSelected] = useState('2021')
  const [isClicked, setIsClicked] = useState(false)

  function onAddExpenseFilter(year) {
    setYearSelected(year)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  })

  function sortExpenses() {
    setIsClicked(prevCheck => !prevCheck)
  }

  //const sortedExpenses = filteredExpenses.sort(function(a,b){return new Date(a.date) - new Date(b.date)})
  const sortedExpenses = [...filteredExpenses]
  sortedExpenses.sort(function (a, b) { return a.amount - b.amount })


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter expenses={expenses} selected={yearSelected} addExpenseFilter={onAddExpenseFilter} onSortExpenses={sortExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} sortedExpenses={sortedExpenses} isClicked={isClicked}/>
      </Card>
    </div>
  )
}
