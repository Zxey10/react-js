import React from "react";
import styles from "./ExpenseCard.module.scss";
import arrow from './images/arrow.png'

export default function ExpenseCard() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>Title</h3>
      </div>
      <div className={styles.date}>
        <h2>10 February 2022</h2>
      </div>
      <div className={styles.amount}>
        <h2>$36</h2>
      </div>
      <div className={styles.btn}>
        <img src={arrow} alt="->" />
      </div>
    </div>
  );
}
