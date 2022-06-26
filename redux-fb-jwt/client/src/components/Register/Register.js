import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./Register.module.scss";
import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";

export default function Register() {
  
  const navigate = useNavigate();

  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    handleBlur: emailOnBlur,
    handleChange: emailOnChange,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: userValue,
    isValid: userIsValid,
    isInvalid: userIsInvalid,
    handleBlur: userOnBlur,
    handleChange: userOnChange,
    reset: resetUser,
  } = useInput((value) => value.trim().length > 5);

  const {
    enteredValue: passwordValue,
    isValid: passwordIsValid,
    isInvalid: passwordIsInvalid,
    handleBlur: passwordOnBlur,
    handleChange: passwordOnChange,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 5);

  let formIsValid = emailIsValid && passwordIsValid && userIsValid;

  function handleSubmit(e) {
    e.preventDefault()
    if (!formIsValid) return;

    resetUser();
    resetEmail();
    resetPassword();
    navigate("/");
    console.log('Submited')
  }

  return (
    <Container fluid className={styles.register}>
      <div className={styles.form}>
        <div>
          <h1 className="text-light text-center mb-5">Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="text"
              className={`${
                userIsInvalid ? "border border-2 border-danger" : " "
              } form-control`}
              id="floatingInput1"
              placeholder="name@example.com"
              value={userValue}
              onChange={userOnChange}
              onBlur={userOnBlur}
              required
            />
            <label htmlFor="floatingInput1">Username</label>
            {userIsInvalid && (
              <p className="text-danger mt-2">User is invalid</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="email"
              className={`${
                emailIsInvalid ? "border border-2 border-danger" : " "
              } form-control`}
              id="floatingInput2"
              placeholder="name@example.com"
              value={emailValue}
              onChange={emailOnChange}
              onBlur={emailOnBlur}
              required
            />
            <label htmlFor="floatingInput2">Email address</label>
            {emailIsInvalid && (
              <p className="text-danger mt-2">Email is invalid</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className={`${
                passwordIsInvalid ? "border border-2 border-danger" : " "
              } form-control`}
              id="floatingPassword"
              placeholder="Password"
              value={passwordValue}
              onChange={passwordOnChange}
              onBlur={passwordOnBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {passwordIsInvalid && (
              <p className="text-danger mt-2">Password is invalid</p>
            )}
          </div>
          <div className="d-flex justify-content-start mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
