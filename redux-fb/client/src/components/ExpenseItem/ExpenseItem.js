import React, { Fragment, useEffect, useState } from "react";
import styles from "./ExpenseItem.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import calendar from "../UI/images/calendar.png";
import info from "../UI/images/info4.png";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/use-http";
import { fetchExpenseById } from "../lib/api";
import { formatDateMonth } from "../helpers/dateFormat";
import { addNewItem } from "../store/expenses-actions";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-input";

export default function ExpenseItem() {
  const params = useParams();
  const { expenseId } = params;
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const {
    enteredValue: expenseItem,
    isValid: expenseItemIsValid,
    isInvalid: expenseItemIsInvalid,
    reset: resetItem,
    handleChange: expenseItemOnChange,
    handleBlur: expenseItemOnBlur,
  } = useInput((value) => value.trim().length > 1);

  const {
    enteredValue: priceItem,
    isValid: priceItemIsValid,
    isInvalid: priceItemIsInvalid,
    reset: resetPriceItem,
    handleChange: priceItemOnChange,
    handleBlur: priceItemOnBlur,
  } = useInput((value) => value > 0);

  const {
    status,
    error,
    data: expenseData,
    sendReq: fetchExpense,
  } = useHttp(fetchExpenseById, true);

  useEffect(() => {
    fetchExpense(expenseId);
  }, [fetchExpense, expenseId]);

  function addItem() {
    let item = {
      id: 12315,
      text: "123",
      price: 32,
    };
    setShowForm(prev => !prev)
    //dispatch(addNewItem(item, expenseId));
    resetItem();
    resetPriceItem();
  }

  function addExpenseTask(){

  }

  if (status === "pending") {
    return <p>Pending ...</p>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  if (status === "completed") {
    let { day, month, year } = formatDateMonth(expenseData.date);

    return (
      <Container fluid className={styles.expenseItem}>
        <div className={styles.heading}>
          <h1>{expenseData.title}</h1>
          <h1>{params.expenseId}</h1>
          <h1>Expenses ${expenseData.totalExpense}</h1>
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
                  <h4>{`${day} ${month} ${year}`}</h4>
                </div>
                <div className="d-flex justify-content-start align-items-center mt-4">
                  <img className={styles.info} src={info} alt="" />
                  <h3 className="mx-2">Notes</h3>
                </div>
                <p className="border border-white rounded p-3 mt-3 text-wrap">
                  {expenseData.notes}
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <button className="btn btn-warning text-white col-2">
                    Edit
                  </button>
                  <button className="btn btn-danger col-2">Delete</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.right}>
                <h3>Items</h3>
                <div className={styles.itemList}>
                  <div className={styles.items}>
                    {/* {expenseData.items.map((item) => (
                      <div
                        key={Math.random()}
                        className="d-flex justify-content-around align-items-center"
                      >
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                    ))} */}
                  </div>
                </div>
                {showForm && <Fragment>
                <div className="form-floating d-flex justify-content-center align-items-start flex-column">
                  <div className="form-floating d-flex justify-content-center align-items-center w-100">
                    <input
                      value={expenseItem}
                      type="text"
                      className="form-control me-2"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={expenseItemOnChange}
                      onBlur={expenseItemOnBlur}
                    />
                    <label htmlFor="floatingPassword">Items</label>

                    <input
                      value={priceItem}
                      type="number"
                      className="form-control me-2"
                      id="price"
                      placeholder="Price"
                      onChange={priceItemOnChange}
                      onBlur={priceItemOnBlur}
                    />
                    <label className={styles.priceLabel} htmlFor="price">
                      Price
                    </label>

                    <button
                      type="button"
                      onClick={addExpenseTask}
                      className={styles.addBtn}
                    >
                      +
                    </button>
                  </div>
                  {expenseItemIsInvalid && (
                    <p className="text-danger">Expense Invalid</p>
                  )}
                  {priceItemIsInvalid && (
                    <p className="text-danger">Price Invalid</p>
                  )}
                </div>
                </Fragment>}
                  <button onClick={addItem} className={styles.btn}>
                    +
                  </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
