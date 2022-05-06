import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import CardBS from "./components/UI/Card";

function App() {
  const containerClasses = `${styles.container}`;
  const columnsClasses = `d-flex justify-content-center align-center border border-warning m-2`

  return (
    <Fragment>
      <Navbar />
    <Container fluid className={containerClasses}>
      <Row>
        <Col className={columnsClasses}>
          <CardBS />
        </Col>
      </Row>
    </Container>
    </Fragment>
  );
}

export default App;
