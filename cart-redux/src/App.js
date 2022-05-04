import React, { Fragment, useEffect } from 'react';
import styles from './App.module.scss';
import NavbarBS from './components/Navbar/NavbarBS';
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './components/store/ui';

//!https://react-test-242e7-default-rtdb.firebaseio.com/

let isInitial = true;

function App() {

  const cart = useSelector(state => state.cart)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const notification = useSelector(state => state.ui.notification)
  const dispatchUI = useDispatch()

  useEffect(() => {
    const reqConfig = {
      url: 'https://react-test-242e7-default-rtdb.firebaseio.com/cartItems.json',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    }
    const updateCart = async() => {
      dispatchUI(uiActions.showNotification({
        status: 'pending',
        title: 'Loading',
        message: '...'
      }))
      try {
        const res = await fetch(reqConfig.url,{
          method: reqConfig.method,
          headers: reqConfig.headers,
          body : reqConfig.body
        })
  
        if(!res.ok){
          throw new Error('Request Failed')
        }

        const json = await res.json();  
        console.log(json)
        dispatchUI(uiActions.showNotification({
          status: 'success',
          title: res.statusText,
          message: 'Req send succesfully'
        }))

      } catch (error) {

        console.log(error)
        dispatchUI(uiActions.showNotification({
          status: "error",
          title: "Erorr",
          message: error.message
        }))
      }
    }

    if(isInitial){
      isInitial = false;
      return;
    }

    updateCart();
  },[cart,dispatchUI])

  return (
    <Fragment>
      <NavbarBS />
      <div className={styles.mainDiv}>
        {showCart && <Cart />}
        <Product />
      </div>
    </Fragment>
  );
}

export default App;
