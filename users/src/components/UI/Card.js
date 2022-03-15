import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  )
}
