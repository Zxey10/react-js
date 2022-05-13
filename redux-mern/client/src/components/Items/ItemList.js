import React from 'react'
import styles from './ItemList.module.scss'


export default function ItemList({expensesItems}) {
  return (
    <ul className={styles.itemList}>
      {expensesItems.map(expense => {
        return <li key={Math.random()}>{expense.name}</li>
      })}
    </ul>
  )
}
