import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = [{ id: "c1", name: "susgi", amount: 1, price: 100 }].map((item) => <li key={item.id}>{item.name}</li>);;

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
