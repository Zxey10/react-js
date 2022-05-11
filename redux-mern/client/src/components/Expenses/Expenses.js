import React from "react";
import styles from "./Expenses.module.scss";
import { Container } from "react-bootstrap";
import ExpenseCard from "../UI/ExpenseCard";
import { useSelector } from "react-redux";
import addIcon from '../UI/images/add.png'
import { useNavigate, Link } from "react-router-dom";

export default function Expenses() {

  const navigate = useNavigate();
  const expenses = useSelector(state => state.expenses.expenses)

  return (
    <Container fluid className={styles.expenses}>
      <div className="py-5 mx-5 d-flex justify-content-between align-items-center">
        <h2 className={styles.expenseList}>Expenses List</h2>
        <Link className="mx-5" to="/newExpense"><img src={addIcon} className={styles.addBtn} alt="Add"/></Link>
      </div>
      <Container className={styles.expensesCards}>
        {expenses.length === 0 && <h5 className="text-white">No Expenses</h5>}
        {expenses.map(expense => (
            <ExpenseCard key={Math.random()} expense={expense}/>
        ))}       
      </Container>
    </Container>
  );
}
