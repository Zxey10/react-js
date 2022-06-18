import React from 'react'
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <h3>Site Name</h3>
      <div className={styles.navigationLinks}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Products</NavLink>
          <NavLink to='/'>Contact</NavLink>
      </div>
    </nav>
  )
}
