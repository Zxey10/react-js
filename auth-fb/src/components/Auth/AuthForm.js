import { useState, useRef, render } from "react";
import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import FlashMessage from 'react-flash-message'

const Message = ({message,duration}) => (
  <FlashMessage duration={duration} className={classes.flash}>
    <strong className={classes.flash}>{message}!</strong>
  </FlashMessage>
)

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMsg,setErrorMsg] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const authCtx = useContext(AuthContext)
  const [showFlash,setShowFlash] = useState(false)
  let history = useHistory();
  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword)
    
  
    if (isLogin) {
      setShowFlash(false)
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


        authCtx.login(json.idToken);

        setShowFlash(true)

        setTimeout(() => {history.replace('/profile')},2000)

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
      {showFlash && <Message message='Logged In' duration={1000} />}
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
          {authCtx.isLoggedIn && <p>Logged In</p>}
        </div>
      </form>
      <button onClick={() => {console.log(process.env)}}>ENV</button>
    </section>
  );
};

export default AuthForm;
