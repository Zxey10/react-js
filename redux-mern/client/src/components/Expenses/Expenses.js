import React from "react";
import styles from "./Expenses.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseCard from "../UI/ExpenseCard";
import { EXPENSES } from '../data/expenses'

export default function Expenses() {


//   let rows = [...Array(Math.ceil(EXPENSES.length / 3))]
//   const expensesRows = rows.map( (row, idx) => EXPENSES.slice(idx * 3, idx * 3 + 3) );
//   const content = expensesRows.map((row, idx) => (
//     <Row className="my-3" key={idx}>    
//     { row.map( expense => <Col className="d-flex mt-2 justify-content-center align-items-center"><ExpenseCard expense={expense}/></Col>)}
//     </Row> )
// );

  return (
    <Container fluid className={styles.expenses}>
      <div className="p-5">
        <h2 className={styles.expenseList}>Expenses List</h2>
      </div>
      <Container className={styles.expensesCards}>
        {EXPENSES.map(expense => (
            <ExpenseCard key={Math.random()} expense={expense}/>
        ))}       
      </Container>
    </Container>
  );
}
