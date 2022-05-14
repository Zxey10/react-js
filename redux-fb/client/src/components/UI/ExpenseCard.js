import React from "react";
import styles from "./ExpenseCard.module.scss";
import arrow from './images/arrow.png'
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/dateFormat";

export default function ExpenseCard({expense}) {

  let date = formatDate(expense.date)

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{expense.title}</h3>
      </div>
      <div className={styles.date}>
        <h2>{date}</h2>
      </div>
      <div className={styles.amount}>
        <h2>${expense.totalExpense}</h2>
      </div>
      <div className={styles.btn}>
        <Link to='/expenseItem'><img src={arrow} alt="->" /></Link>
      </div>
    </div>
  );
}
