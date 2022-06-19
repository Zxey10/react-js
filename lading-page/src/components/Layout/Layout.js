import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarBS from '../Navbar/NavbarBS'
import styles from './Layout.module.scss'

export default function Layout(props) {
  return (
    <Fragment>
      <NavbarBS />  
      <main className={styles.layout}>
        {props.children}
      </main>
    </Fragment>
  )
}
