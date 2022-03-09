import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {
    let expenseContent = <h2 className='expense-list__fallback'>No Expenses</h2>;
    if(props.filteredExpenses.length === 0){
        return expenseContent
    }
    if (props.filteredExpenses.length > 0 && props.isClicked) {
        return(
            <ul className='expense-list'>
                {
                    props.sortedExpenses.map(expense => (
                        <ExpenseItem key={expense.id} expense={expense} />
                    ))
                }
            </ul>
        ) 
    } else if (props.filteredExpenses.length > 0 && !props.isClicked) {
        return(
            <ul className='expense-list'>
                {
                    props.filteredExpenses.map(expense => (
                        <ExpenseItem key={expense.id} expense={expense} />
                    ))
                }
            </ul>
        ) 
    }
    
}
