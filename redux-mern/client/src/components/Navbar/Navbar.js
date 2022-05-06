import React, { Fragment } from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <NavBar variant="dark" className={styles.navbar}>
        <Container>
          <NavBar.Brand href="/">Expense Tracker</NavBar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="active" href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/expenses">Register</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </Fragment>
  );
}
