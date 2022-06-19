import React, { Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { ReactComponent as Ghost } from '../../assets/svg/ghost.svg'
import { NavLink } from 'react-router-dom'
import styles from './NavbarBS.module.scss'

export default function NavbarBS() {
  return (
    <Fragment>
      <Navbar className={styles.navbar} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Ghost  
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top mx-2"
          />
          Landing Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-Navbar-nav" />
        <Navbar.Collapse id="responsive-Navbar-nav">
          <Nav className={`ms-auto ${styles.navLinks}`}>
            <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to="/">Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to="/about">About</NavLink>
            <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to="/products">Products</NavLink>
            <NavLink className={(navData) => navData.isActive ? `${styles.active}` : ""} to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}
