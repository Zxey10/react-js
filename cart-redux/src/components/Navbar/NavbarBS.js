import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../UI/Card';
import styles from './Navbar.module.scss'
import Button from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../store/ui';
import Notification from '../Notification/Notification';

export default function NavbarBS() {
  
  const cartItems = useSelector(state => state.cart.items)
  const notification = useSelector(state => state.ui.notification)
  const dispatchUI = useDispatch();

  function showCart(){
    dispatchUI(uiActions.toggle())
  }
  
  return (
    <Card className={styles.navbar}>
      <h1>Redux Cart</h1>
      <div className={styles.notification}>
       {notification !== null && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      </div>
      <Button onClick={showCart}>Cart {cartItems.length}</Button>
    </Card>
  )
}
