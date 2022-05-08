import React from "react";
import styles from "./ExpenseItem.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import calendar from "../UI/images/calendar.png";
import info from "../UI/images/info4.png";

export default function ExpenseItem() {
  return (
    <Container fluid className={styles.expenseItem}>
      <div className={styles.heading}>
        <h1>Expense Title</h1>
        <h1>Expenses $36</h1>
      </div>
      <Container className={styles.expense}>
        <Row className={styles.expenseCard}>
          <Col className={styles.column}>
            <div className={styles.left}>
              <div className={styles.date}>
                <div className="d-flex justify-content-center align-items-start">
                  <img src={calendar} alt="" />
                  <h3 className="mx-2">Date</h3>
                </div>
                <h4>20 July 2022</h4>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-4">
                <img className={styles.info} src={info} alt="" />
                <h3 className="mx-2">Notes</h3>
              </div>
              <p className="border border-white rounded p-3 mt-3">
                random notes random notes random notes random notes random notes
                random notes random notes  random notes random notes random notes random notes random notes
                random notes random notes random notes random notes random notes random notes random notes
                random notes random notes random notes random notes random notes random notes random notes
                random notes random notes
              </p>
              <div className="d-flex justify-content-center align-items-center">
              <button className={styles.edit}>Edit</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.right}>
              <h3>Items</h3>
              <div className={styles.itemList}>
                <div className={styles.items}>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                  <div className="d-flex justify-content-around align-items-center">
                    <p>Item 1</p>
                    <p>$36</p>
                  </div>
                </div>
              </div>
              <button className={styles.btn}>+</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
