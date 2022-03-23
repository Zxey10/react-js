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


  function addOnExisitingMeal(item){
    ctx.addOnCart(item)
  }

  function deleteExistingMeal(meal){
    ctx.deleteFromCart(meal)
  }

  function orderFood(){
    console.log(`Ordering... $${ctx.total}`);
  }

  return (
    <Card className={styles.overlay}>
      <Card className={styles.cart}>
      {ctx.items.length > 0 ? ctx.items.map(item => (
          <div key={item.id} className={styles.infoOrder}>
            <h3>{item.name}</h3>
            <h3>${item.price}</h3>
            <h3>x {item.mult}</h3>
            <Button type='button' onClick={() => {addOnExisitingMeal(item)}}>+</Button>
            <Button type='button' onClick={() => {deleteExistingMeal(item)}}>-</Button>
        </div>
      ))
      :
      (<h2>No Items In The Cart</h2>)
    }
        <div className={styles.totalOrder}>
          <h2>Total Amount</h2>
          <h2>${ctx.total}</h2>
          <Button type='button' onClick={props.onClose} className={styles.btn}>Close</Button>
          <Button type='button' onClick={orderFood}>Order</Button>
        </div>
      </Card>
    </Card>
  )
}
