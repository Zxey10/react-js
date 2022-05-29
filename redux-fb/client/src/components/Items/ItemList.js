import React from "react";
import styles from "./ItemList.module.scss";
import { XCircle } from "react-bootstrap-icons";

export default function ItemList({ expensesItems, onRemoveExpenseItem }) {
  function removeExpenseItem(id) {
    onRemoveExpenseItem(id);
  }

  return (
    <div className={styles.itemList}>
      {expensesItems.map((expense) => {
        return (
          <div className="d-flex justify-content-baseline align-items-center" 
          key={Math.random()}>
            <XCircle
              onClick={removeExpenseItem.bind(null, expense.id)}
              className={styles.remove}
              color="red"
            />
            <p className="text-white m-0 p-1"> ${expense.price} {expense.text}</p>
          </div>
        );
      })}
    </div>
  );
}
