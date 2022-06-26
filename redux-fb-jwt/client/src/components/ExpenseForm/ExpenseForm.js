import React, { useState } from "react";
import styles from "./ExpenseForm.module.scss";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { createNewExpense } from "../store/expenses-actions";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-input";

export default function ExpenseForm() {
  const [textareaValue, setTextAreaValue] = useState("");

  const {
    enteredValue: dateItem,
    isValid: dateItemIsValid,
    isInvalid: dateItemIsInvalid,
    reset: resetDateItem,
    handleChange: dateItemOnChange,
    handleBlur: dateItemOnBlur,
  } = useInput((value) => value.trim().length > 0);


  const {
    enteredValue: expenseTitle,
    isValid: expenseTitleIsValid,
    isInvalid: expenseTitleIsInvalid,
    reset: resetExpenseTitle,
    handleChange: expenseTitleOnChange,
    handleBlur: expenseTitleOnBlur,
  } = useInput((value) => value.trim().length > 3);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function textAreaOnChange(e) {
    setTextAreaValue(e.target.value);
  }

  let formIsValid = expenseTitleIsValid && dateItemIsValid;

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!formIsValid) return;

    const expense = {
      title: expenseTitle,
      id: Math.random(),
      date: dateItem || Date.now(),
      notes: textareaValue,
      items: []
    };

    dispatch(createNewExpense(expense));

    resetExpenseTitle();
    resetDateItem();
    setTextAreaValue("");

    navigate("/expenses", { replace: true });
  }

  return (
    <Container fluid className={styles.new}>
      <div className={styles.form}>
        <div className="">
          <h1 className="text-light text-center mb-5">Create New Expense</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating">
            <input
              value={expenseTitle}
              type="text"
              className="form-control"
              id="floatingInput1"
              placeholder="name@example.com"
              required
              onChange={expenseTitleOnChange}
              onBlur={expenseTitleOnBlur}
            />
            <label htmlFor="floatingInput1">Expense Name</label>
            {expenseTitleIsInvalid && <p className="text-danger">Invalid</p>}
          </div>
          <div className="form-floating">
            <input
              value={dateItem}
              type="date"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              onChange={dateItemOnChange}
              onBlur={dateItemOnBlur}
            />
            <label htmlFor="floatingPassword">Date</label>
            {dateItemIsInvalid && <p className="text-danger">Invalid</p>}
          </div>

          <div className="form-floating form-group">
            <textarea
              value={textareaValue}
              type="text"
              className={`form-control ${styles.textarea}`}
              id="floatingArea"
              rows={5}
              onChange={textAreaOnChange}
            />
            <label htmlFor="floatingArea">Notes</label>
          </div>
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
