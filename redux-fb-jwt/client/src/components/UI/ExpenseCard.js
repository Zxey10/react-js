import React from "react";
import styles from "./ExpenseCard.module.scss";
import arrow from './images/arrow.png'
import { Link } from "react-router-dom";
import { formatDateMonth } from "../helpers/dateFormat";
import { useSelector } from "react-redux";

export default function ExpenseCard({expense}) {

  const expenses = useSelector(state => state.expenses.expenses)

  let {day, month, year} = formatDateMonth(expense.date)
  let index = expenses.findIndex(exp => exp.id === expense.id)
  const totalExpense = expenses[index].items.reduce((acc,current) => acc + +current.price, 0)

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{expense.title}</h3>
      </div>
      <div className={styles.date}>
        <h2>{`${day} ${month} ${year}`}</h2>
      </div>
      <div className={styles.amount}>
        <h2>${totalExpense}</h2>
      </div>
      <div className={styles.btn}>
        <Link to={`/expenses/${expense.key}`}><img src={arrow} alt="->" /></Link>
      </div>
    </div>
  );
}
