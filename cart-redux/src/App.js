import React, { Fragment, useEffect } from 'react';
import styles from './App.module.scss';
import NavbarBS from './components/Navbar/NavbarBS';
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './components/store/cart-actions'

//!https://react-test-242e7-default-rtdb.firebaseio.com/

let isInitial = true;

function App() {

  const cart = useSelector(state => state.cart)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const dispatchUI = useDispatch()

  useEffect(() => {
    dispatchUI(fetchCartData())
  },[dispatchUI])

  useEffect(() => {
    if(isInitial){
      isInitial = false
      return;
    }

    if(cart.changed){
      dispatchUI(sendCartData(cart))
    }


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
