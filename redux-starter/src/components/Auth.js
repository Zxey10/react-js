import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { useInput } from '../hooks/use-input';
import { useEffect, useState } from 'react';

const Auth = () => {

  const dispatch = useDispatch();
  const [formIsValid,setFormIsValid] = useState(false)
  const {
    enteredValue: emailValue,
    isEnteredValueValid: emailIsValid,
    isInvalid: emailIsInvalid,
    reset: resetEmail,
    changeHandler: emailChange,
    blurHandler: emailBlur
  } = useInput(value => value.includes('@'));

  const {
    enteredValue: passwordValue,
    isEnteredValueValid: passwordIsValid,
    isInvalid: passwordIsInvalid,
    reset: resetPassword,
    changeHandler: passwordChange,
    blurHandler: passwordBlur
  } = useInput(value => value.trim().length > 4);

  function loginHandler(e){

    //validation

    e.preventDefault()
   
    if(!formIsValid) return;

    if(formIsValid){
      dispatch(authActions.login())
    }

    resetEmail();
    resetPassword();
    setFormIsValid(false);
  }

  useEffect(() => {
    if(emailIsValid && passwordIsValid){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }
  },[emailIsValid,passwordIsValid])

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={emailValue} type='email' id='email' onChange={emailChange} onBlur={emailBlur}/>
            {emailIsInvalid && <p>Email Invalid</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input value={passwordValue} type='password' id='password' onChange={passwordChange} onBlur={passwordBlur} />
            {passwordIsInvalid && <p>Password Invalid</p>}
          </div>
          <button disabled={!formIsValid}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
