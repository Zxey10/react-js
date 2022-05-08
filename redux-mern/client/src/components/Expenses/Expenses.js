import React from "react";
import styles from "./Expenses.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseCard from "../UI/ExpenseCard";

export default function Expenses() {
  return (
    <Container fluid className={styles.expenses}>
      <div className="p-5">
        <h2 className={styles.expenseList}>Expenses List</h2>
      </div>
      <Container className="p-2">
        <Row>
          <Col>
            <ExpenseCard />
          </Col>
          <Col>
            <ExpenseCard />
          </Col>
          <Col>
            <ExpenseCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
