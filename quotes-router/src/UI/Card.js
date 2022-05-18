import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({quote}) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
      <h3>{quote.title}</h3>
      <p>{quote.author}</p>
      </div>
      <Link to={`/quotes/${quote.id}`}><button>View Fullscreen</button></Link>
    </div>
  )
}
