import React, { Fragment } from "react";
import { Navbar as NavBar, Container, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Fragment>
      <NavBar bg="dark" variant="dark" className='w-100'>
        <Container>
          <NavBar.Brand href="#home">NavBar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </Fragment>
  );
}
