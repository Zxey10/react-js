import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

export default function HeaderCartButton(props) {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
    return currNumber + item.amount
  },0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    },300)
    return () => {
      clearTimeout(timer)
    }
  },[cartCtx.items])

  return (
      <button onClick={props.onClick} className={btnClasses}>
          <span className={styles.icon}>
            <CartIcon />
          </span>
          <span >Your Cart</span>
          <span className={styles.badge}>
            {numberOfCartItems}
          </span>
      </button>
  )
}
