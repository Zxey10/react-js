import React, { useContext, useState, useEffect, Fragment } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartForm from './CartForm'
import { useMounted } from "../../hooks/use-mount";


export default function Cart(props) {

  const [isSubmited, setIsSubmited] = useState(false)

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const isMounted = useMounted()

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id)
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  function formSubmited() {
    setIsSubmited(true)
  }

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmited ? (
        <Fragment>
          <div>
            <ul className={styles["cart-items"]}>{cartItems}</ul>
            <div className={styles.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
              <button className={styles["button--alt"]} onClick={props.onHideCart}>
                Close
              </button>
              {/* {hasItem && <button onClick={orderFood} className={styles.button}>Order</button>} */}
            </div>
          </div>
          <CartForm onFormSubmited={formSubmited} />
        </Fragment>
      ) : (
        <p>Order Sent</p>
      )}
    </Modal>
  )
}
