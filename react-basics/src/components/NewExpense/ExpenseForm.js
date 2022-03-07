import React, {useState} from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [titleValue,setTitleValue] = useState('');
    const [amountValue,setAmountValue] = useState('');
    const [dateValue,setDateValue] = useState('');

    // const [userInput,setUserInput] = useState({
    //     titleValue:'',
    //     amountValue:'',
    //     dateValue:''
    // })

    function titleChangeHandler(e){
        setTitleValue(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     titleValue:e.target.value,
        // })
        // setUserInput(prevState => {
        //     return {...prevState,titleValue:e.target.value}
        // })
    }
    
    function amountChangeHandler(e){
        setAmountValue(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     amountValue:e.target.value,
        // })
        // setUserInput(prevState => {
        //     return {...prevState,amountValue:e.target.value}
        // })
    }  

    function dateChangeHandler(e){
        setDateValue(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     dateValue:e.target.value,
        // })
        // setUserInput(prevState => {
        //     return {...prevState,dateValue:e.target.value}
        // })
    }  

    function handleSubmit(e){

        e.preventDefault()

        const expenseData = {
            title:titleValue,
            amount:amountValue,
            date:new Date(dateValue)
        }

        props.onSaveExpenseData(expenseData);

        //console.log(expenseData);  
        
        setTitleValue('')
        setAmountValue('')
        setDateValue('')


    }


  return (
    <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={titleValue} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amountValue} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={dateValue} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}
