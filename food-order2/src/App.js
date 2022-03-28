import React, { useState, useContext, useEffect } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "./App.css";
import { AuthContext } from "./store/auth-context";
import Login from "./components/UI/Login";
import ReactDOM from "react-dom";

function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    authCtx.saveLogin(loggedIn);
  },[])

  useEffect(() => {
    localStorage.setItem('isLoggedIn',JSON.stringify(authCtx.isLoggedIn))
  },[authCtx.isLoggedIn])

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {!authCtx.isLoggedIn && ReactDOM.createPortal(<Login />,document.getElementById('login-modal'))}
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
