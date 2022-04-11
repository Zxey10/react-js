import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './WaitingCart.module.css'


export default function WaitingCart() {

  const cartCtx = useContext(CartContext)

  return (
    <button type='button' className={styles.cart}>Waiting ... {cartCtx.orders}</button>
  )
}
