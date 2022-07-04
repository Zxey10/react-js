import React, { Fragment } from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import styles from './Navbar.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchUserData, logout } from "../store/authThunk";


export default function Navbar() {

  const isAuth = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logout())
  }

  function getUser(){
    dispatch(fetchUserData())
  }

  return (
    <Fragment>
      <NavBar variant="dark" className={styles.navbar}>
        <Container>
          <NavBar.Brand><Link to='/' className="text-white">Expense Tracker</Link></NavBar.Brand>
          <Nav className="ms-auto">
            <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/">Home</NavLink>
            { isAuth && <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/expenses">Expenses</NavLink>}
            {!isAuth && <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/login">Login</NavLink>}
            {!isAuth && <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/register">Register</NavLink>}
            { isAuth && <NavLink className={({isActive}) => isActive ? styles.active : ''} to="/test">Test</NavLink>}
            { isAuth && <NavLink onClick={logoutHandler} to="/">Logout</NavLink>}
            <button onClick={getUser}>Click</button>
          </Nav>
        </Container>
      </NavBar>
    </Fragment>
  );
}
