import { useEffect, useState } from "react";
import useInput2 from "./hooks/use-input2";

const BasicForm = (props) => {

  const [formIsValid,setFormIsValid] = useState(false)

  const {
    enteredValue: firstName,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    enteredValueIsValid: firstNameIsValid,
    hasError: firstNameIsInvalid,
    reset: resetFirstName
  } = useInput2((value => value.trim() !== ''))

  useEffect(() => {
    if(firstNameIsValid){
      setFormIsValid(true)
    }
  },[firstNameIsValid])

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if(firstNameIsInvalid){
      return
    }

    resetFirstName()
    setFormIsValid(false)
  }

  const firstNameClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input value={firstName} type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameIsInvalid && <p className='error-text'>First Name can't be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
