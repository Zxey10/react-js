import React, { useRef , useState} from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm(props) {

  const amountInputRef = useRef()
  const [amountIsValid,setAmountIsValid] = useState(true);

  function addNewItemToCart(e){
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = + enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
    //setAmountIsValid(true)
  }

  return (
    <form onSubmit={addNewItemToCart} className={styles.form}>
      <Input label='Amount'
      ref={amountInputRef}
      input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}/>
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Enter a valid Amount</p>}
    </form>
  )
}
