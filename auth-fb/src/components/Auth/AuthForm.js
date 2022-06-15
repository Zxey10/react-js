import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMsg,setErrorMsg] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword)
    
  
    if (isLogin) {
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`
      try {
        const res = await fetch(
          url,
          {
            method: "POST",
            headers: {
              "Content-Type": "appliction/json",
            },
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
          }
        );

        if(!res.ok){
          const json = await res.json();
          console.log(json)
          throw new Error('Sign in Failed')
        }
        const json = await res.json();
        console.log(json)

        setIsLoggedIn(true)

      } catch (error) {
        console.log(error)
      }
    } else {
      setIsLoading(true)
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "appliction/json",
            },
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
          }
        );

        if(!res.ok){
          const json = await res.json();
          setErrorMsg(json.error.errors[0].message)
        }


      } catch (error) {
        console.log(error)
      }
    }
    setIsLoading(false)
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Loading ...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          {errorMsg !== null && <p className={classes['auth-error']}>{errorMsg}</p>}
          {isLoggedIn && <p>Logged In</p>}
        </div>
      </form>
      <button onClick={() => {console.log(process.env)}}>ENV</button>
    </section>
  );
};

export default AuthForm;
