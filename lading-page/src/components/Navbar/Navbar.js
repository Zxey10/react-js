import React from 'react'
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <h3>LOGO</h3>
      <div className={styles.navigationLinks}>
          <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to='/'>Home</NavLink>
          <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to='/about'>About</NavLink>
          <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to='/products'>Products</NavLink>
          <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to='/contact'>Contact</NavLink>
      </div>
      
    </nav>
  )
}
