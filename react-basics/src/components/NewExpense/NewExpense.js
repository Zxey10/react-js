import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

  const [isEditing,setIsEditing] = useState(false)

  function saveExpenseHandler(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }  

  const startEditing = () =>{
    setIsEditing(true)
  }

  const stopEditing = () =>{
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
       {!isEditing &&  <button onClick={startEditing}>Add Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditing}/>}
    </div>
  )
}
