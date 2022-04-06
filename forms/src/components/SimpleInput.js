import { useEffect, useState } from 'react'
import useInput from './hooks/use-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChnageHandler,
    valueInputBlur: nameBlurHandler,
    reset: resetNameInput 
  } = useInput((value => value.trim() !== ''));

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChnageHandler,
    valueInputBlur: emailBlurHandler,
    reset: resetEmailInput 
  } = useInput((value => value.includes('@')))
 

  const [formIsValid, setFormValid] = useState(false)


  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [enteredNameIsValid, enteredEmailIsValid])




  const formSubmit = (e) => {
    e.preventDefault();
    
    resetNameInput()
    resetEmailInput()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
  }


  const nameInputClases = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClases}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChnageHandler} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className='error-text'>Name must not be emty</p>}
      </div>
      <div className={emailInputClasses}>
      <label htmlFor="email">Email</label>
        <input value={enteredEmail} type='email' id='email' onChange={emailChnageHandler} onBlur={emailBlurHandler}></input>
        {emailInputHasError && <p className='error-text'>Email must include @ or not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
