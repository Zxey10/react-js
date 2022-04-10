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

  const {
    enteredValue: lastName,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    enteredValueIsValid: lastNameIsValid,
    hasError: lastNameIsInvalid,
    reset: resetLastName
  } = useInput2((value => value.trim() !== ''))

  const {
    enteredValue: email,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    enteredValueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    reset: resetEmail
  } = useInput2((value => value.includes('@')))

  useEffect(() => {
    if(firstNameIsValid && lastNameIsValid && emailIsValid){
      setFormIsValid(true)
    }
  },[firstNameIsValid,lastNameIsValid,emailIsValid])

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if(firstNameIsInvalid && lastNameIsInvalid && emailIsInvalid){
      return
    }

    resetFirstName()
    resetLastName()
    resetEmail()

    setFormIsValid(false)
  }

  const firstNameClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control'
  const emailClasses = emailIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input value={firstName} type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameIsInvalid && <p className='error-text'>First name is invalid</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input value={lastName} type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameIsInvalid && <p className="error-text">Last name is invalid</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input value={email} type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailIsInvalid && <p className="error-text">Email is invalid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
