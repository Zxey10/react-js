import React from "react";
import styles from "./ExpenseCard.module.scss";
import arrow from './images/arrow.png'
import { Link } from "react-router-dom";
import { formatDateMonth } from "../helpers/dateFormat";

export default function ExpenseCard({expense}) {

  let {day, month, year} = formatDateMonth(expense.date)

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{expense.title}</h3>
      </div>
      <div className={styles.date}>
        <h2>{`${day} ${month} ${year}`}</h2>
      </div>
      <div className={styles.amount}>
        <h2>${expense.totalExpense}</h2>
      </div>
      <div className={styles.btn}>
        <Link to={`/expenses/${expense.key}`}><img src={arrow} alt="->" /></Link>
      </div>
    </div>
  );
}
