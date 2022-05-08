import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/UI/MainPage";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./components/Login/Login";
import Expenses from "./components/Expenses/Expenses";
import Register from "./components/Register/Register";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
 

  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/expenseItem" element={<ExpenseItem />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
