import React, { Fragment } from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import styles from './Navbar.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Link } from "react-router-dom";

export default function Navbar() {

  const isAuth = useSelector(state => state.auth.isAuth);
  console.log(isAuth);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <NavBar variant="dark" className={styles.navbar}>
        <Container>
          <NavBar.Brand href="/">Expense Tracker</NavBar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="active" href="/">Home</Nav.Link>
            { isAuth && <Nav.Link href="/expenses">Expenses</Nav.Link>}
            {!isAuth && <Nav.Link href="/login">Login</Nav.Link>}
            {!isAuth && <Nav.Link onClick={console.log('lols')} href="/register">Register</Nav.Link>}
            { isAuth && <Nav.Link onClick={console.log("LOOL")} href="/">Logout</Nav.Link>}
          </Nav>
        </Container>
      </NavBar>
    </Fragment>
  );
}
