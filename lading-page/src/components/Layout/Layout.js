import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.scss'

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar />  
      <main className={styles.layout}>
        {props.children}
      </main>
    </Fragment>
  )
}
