import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import CardBS from "./components/UI/Card";
import MainPage from "./components/UI/MainPage";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./components/Login/Login";
import Expense from "./components/Expenses/Expense";

function App() {
  const containerClasses = `${styles.container}`;
  const columnsClasses = `d-flex justify-content-center align-center border border-warning m-2`

  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
