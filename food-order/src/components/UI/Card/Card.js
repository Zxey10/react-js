import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {

  let classes = `${props.className} ${styles.card}`  

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}
