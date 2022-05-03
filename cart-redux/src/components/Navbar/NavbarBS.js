import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../UI/Card';
import styles from './Navbar.module.scss'
import Button from '../UI/Button';
import { useSelector } from 'react-redux'


export default function NavbarBS() {
  
  const cartItems = useSelector(state => state.cart.items)
  
  return (
    <Card className={styles.navbar}>
      <h1>Redux Cart</h1>
      <Button>Cart {cartItems.length}</Button>
    </Card>
  )
}
