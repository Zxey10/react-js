import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from "../../utils/Helper";
import { login } from "../store/authThunk";

function Login() {

  const [formIsValid,setFormIsValid] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, loading } = useSelector(state => state.auth)


  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    handleBlur: emailOnBlur,
    handleChange: emailOnChange,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: passwordValue,
    isValid: passwordIsValid,
    isInvalid: passwordIsInvalid,
    handleBlur: passwordOnBlur,
    handleChange: passwordOnChange,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 5);

  useEffect(() => {
    if(emailIsValid && passwordIsValid){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }
  },[emailIsValid,passwordIsValid])

  function handleFormSubmit(e) {
    e.preventDefault()
    if(!formIsValid) return;

    dispatch(login({email: emailValue, password: passwordValue}))

    resetEmail()
    resetPassword()
    navigate('/');
  }

  return (
    <Container fluid className={styles.login}>
      <div className={styles.form}>
        <div className="">
          <h1 className="text-light text-center mb-5">Login</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating">
            <input
              value={emailValue}
              type="email"
              className={`${emailIsInvalid ? 'border border-2 border-danger' : ' ' } form-control`}
              id="floatingInput1"
              placeholder="name@example.com"
              required
              onChange={emailOnChange}
              onBlur={emailOnBlur}
            />
            <label htmlFor="floatingInput1">Email address</label>
            {emailIsInvalid && <p className="mt-2 text-danger">Email not Valid</p>}
          </div>
          <div className="form-floating">
            <input
              value={passwordValue}
              type="password"
              className={`${passwordIsInvalid ? 'border border-2 border-danger' : ' ' } form-control`}
              id="floatingPassword"
              placeholder="Password"
              required
              onChange={passwordOnChange}
              onBlur={passwordOnBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {passwordIsInvalid && <p className="mt-2 text-danger">Password not Valid</p>}
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <button type="submit" className="btn btn-primary">Login</button>
            <Link className="" to="/register">
              <button type="button" className="btn btn-warning text-white">
                Register here
              </button>
            </Link>
          </div>
        </form>
        { loading && <div className="loading"><span>Loading...</span></div>}
      </div>
    </Container>
  );
}

export default Login
