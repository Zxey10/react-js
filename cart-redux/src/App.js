import React, { Fragment } from 'react';
import styles from './App.module.scss';
import NavbarBS from './components/Navbar/NavbarBS';
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product';

function App() {
  return (
    <Fragment>
      <NavbarBS />
      <div className={styles.mainDiv}>
        <Cart />
        <Product />
      </div>
    </Fragment>
  );
}

export default App;
