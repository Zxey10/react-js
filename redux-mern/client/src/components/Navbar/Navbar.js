import React, { Fragment } from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Fragment>
      <NavBar bg="dark" variant="dark" className='w-100'>
        <Container>
          <NavBar.Brand href="#home">Expense Tracker</NavBar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="active" href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </Fragment>
  );
}
