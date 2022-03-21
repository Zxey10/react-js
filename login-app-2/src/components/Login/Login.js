import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const EMAIL_ACTIONS = {
  USER_INPUT: 'USER_INPUT',
  INPUT_BLUR: 'INPUT_BLUR'
}

const PASSWORD_ACTIONS = {
  USER_INPUT: 'USER_INPUT',
  INPUT_BLUR: 'INPUT_BLUR'
}

const emailReducer = (state,action) => {
  if(action.type === EMAIL_ACTIONS.USER_INPUT){
    return {value: action.payload ,isValid: action.payload.includes('@')}
  }
  if(action.type === EMAIL_ACTIONS.INPUT_BLUR){
    return {value: state.value ,isValid: state.value.includes('@')}
  }
  return {value: '' ,isValid: false}
}

const passwordReducer = (state,action) => {
  switch(action.type){
    case PASSWORD_ACTIONS.USER_INPUT:
      return {value: action.payload ,isValid: action.payload.trim().length > 6}
    case PASSWORD_ACTIONS.INPUT_BLUR:
      return {value: state.value ,isValid: state.value.trim().length > 6}
    default:
      return state;    
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();


  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value: '',
    isValid: false
  })

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value: '',
    isValid: false
  })

  const {isValid: emailIsValid} = emailState
  const {isValid: passwordIsValid} = passwordState

  useEffect(() => {
    const id = setTimeout(() => {
      console.log('Form');
      setFormIsValid(emailIsValid && passwordIsValid);
    },500);
    return () => {
      console.log('Cleanup');
      clearTimeout(id)
    }
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);

    dispatchEmail({
      type: 'USER_INPUT',
      payload: event.target.value
    })
    
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

     dispatchPassword({
       type: PASSWORD_ACTIONS.USER_INPUT,
       payload: event.target.value
     }) 

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );

  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR'
    })
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type: PASSWORD_ACTIONS.INPUT_BLUR
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      //emailInputRef.current.focus()
    }else{
      passwordInputRef.current.focus()
    }
  };

  function addFocus(){
    console.log('Add Focus');
  }


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
          ref={emailInputRef}
          labelText='Email'
          htmlFor="email"
          id='email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          onAddFocus={addFocus}
       />
      

        <Input
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
          ref={passwordInputRef}
          labelText='Password'
          htmlFor="password"
          id='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
