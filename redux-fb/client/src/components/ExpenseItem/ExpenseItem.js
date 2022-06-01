import React, { Fragment, useEffect, useState } from "react";
import styles from "./ExpenseItem.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import calendar from "../UI/images/calendar.png";
import info from "../UI/images/info4.png";
import { useParams, useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/use-http";
import { fetchExpenseById } from "../lib/api";
import { formatDateMonth } from "../helpers/dateFormat";
import { addNewItem } from "../store/expenses-actions";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-input";
import { deleteExpenseById } from "../store/expenses-actions";
import { fetchExpenses } from "../store/expenses-actions";


export default function ExpenseItem() {
  const params = useParams();
  const { expenseId } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [expensesItems, setExpensesItems] = useState([]);

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

  function showFormExpenseItem() {
    setShowForm(true);
  }

  function removeExpenseItem(id) {
    const updatedExpensesItems = expensesItems.filter((item) => item.id !== id);
    setExpensesItems(updatedExpensesItems);
  }

  function deleteExpense(){
    let ids = {
      expenseFBId: expenseId,
      expenseNormalId: expenseData.id
    }
    dispatch(deleteExpenseById(ids))
    navigate('/expenses', { replace:true })
  }

  let expenseValid = priceItemIsValid && expenseItemIsValid;


  function submitExpenses(e) {
    e.preventDefault();
    console.log("expenses Submited");
    if (!expenseValid) return;
    let expenseItm = {
      id: Math.random(),
      price: priceItem,
      text: expenseItem,
    };
    setExpensesItems((prevExpenses) => [...prevExpenses, expenseItm]);
    resetItem();
    resetPriceItem();
    setShowForm(false)
    dispatch(addNewItem(expenseItm, expenseId, expenseData.id));


    setTimeout(() => {
      fetchExpense(expenseId);
    },500)


  }

  if (status === "pending") {
    return <p>Pending ...</p>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }


  if (status === "completed") {
    let { day, month, year } = formatDateMonth(expenseData.date);
    const totalExpense = expenseData.items.reduce((acc,current) => acc + +current.price, 0)
    return (
      <Container fluid className={styles.expenseItem}>
        <div className={styles.heading}>
          <h1>{expenseData.title}</h1>
          <h1>{params.expenseId}</h1>
          <h1>Expenses ${totalExpense}</h1>
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
                  <button onClick={deleteExpense} className="btn btn-danger col-2">Delete</button>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.right}>
                <h3>Items</h3>
                <div className={styles.itemList}>
                  <div className={`${styles.items} ${expenseData.items.length > 0 ? 'border border-white' : ''}`}>
                    {expenseData.items.map((item) => (
                      <div
                        key={Math.random()}
                        className="d-flex justify-content-around align-items-center"
                      >
                        <div className="d-flex w-100 justify-content-between mx-3 align-items-center">
                          <p>{item.text}</p>
                          <p>${item.price}</p>
                        </div>                        
                      </div>
                    ))}
                  </div>
                </div>
                {showForm && (
                  <Fragment>
                    <form id="expense-form" onSubmit={submitExpenses}>
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
                          <label
                            htmlFor="floatingPassword"
                            className="text-dark"
                          >
                            Items
                          </label>

                          <input
                            value={priceItem}
                            type="number"
                            className="form-control me-2"
                            id="price"
                            placeholder="Price"
                            onChange={priceItemOnChange}
                            onBlur={priceItemOnBlur}
                          />
                          <label
                            className={`${styles.priceLabel} text-dark`}
                            htmlFor="price"
                          >
                            Price
                          </label>

                          <button
                            type="submit"
                            className={styles.addBtn}
                          >
                            +
                          </button>
                        </div>
                          <div className="w-100 d-flex justify-content-center align-items-center">
                            <button type="button" onClick={() => {setShowForm(false)}} className="btn btn-danger">Cancel</button>
                          </div>
                        {expenseItemIsInvalid && (
                          <p className="text-danger">Expense Invalid</p>
                        )}
                        {priceItemIsInvalid && (
                          <p className="text-danger">Price Invalid</p>
                        )}
                      </div>
                      {/* <ItemList expensesItems={expensesItems} onRemoveExpenseItem={removeExpenseItem} /> */}
                    </form>
                  </Fragment>
                )}
                {!showForm && (
                  <button
                    type="button"
                    onClick={showFormExpenseItem}
                    className={styles.btn}
                  >
                    Add Expenses
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
