import React, { useContext, useEffect } from 'react'
import AuthContext from '../store/auth-context'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import styles from './Cart.module.css'

export default function Cart(props) {

  const ctx = useContext(AuthContext)

  useEffect(() => {
    console.log(ctx.items);
  },[ctx.items])

  return (
    <Card className={styles.overlay}>
      <Card className={styles.cart}>
      {ctx.items.map(item => (
          <div key={item.id} className={styles.infoOrder}>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <h3>x 2</h3>
            <Button type='button'>+</Button>
            <Button type='button'>-</Button>
        </div>
      ))}
        <div className={styles.totalOrder}>
          <h2>Total Amount</h2>
          <h2>$33.99</h2>
          <Button type='button' onClick={props.onClose} className={styles.btn}>Close</Button>
          <Button type='button'>Order</Button>
        </div>
      </Card>
    </Card>
  )
}
