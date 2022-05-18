import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.nav}>
        <h1>Great Quotes</h1>
        <div>
            <Link to='/quotes'>All Quotes</Link>
            <Link to='/quotes/new'>New Quote</Link>
        </div>
    </div>
  )
}
