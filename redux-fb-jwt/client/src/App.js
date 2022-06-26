import React, { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/UI/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Expenses from "./components/Expenses/Expenses";
import Register from "./components/Register/Register";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "./components/store/expenses-actions";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import NotFound from "./pages/NotFound";
import ReduxThunk from "./components/test/ReduxThunk";
import PrivateRoute from "./components/Private/PrivateRoute";
import Test from "./pages/Test";


function App() {
 
  const dispatch = useDispatch();
  const data = useSelector(state => state.auth)
  console.table(data)

  useEffect(() => {
    dispatch(fetchExpenses()) 
  },[dispatch])

  

  return (
    <Fragment>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/test" element={<PrivateRoute />}>
            <Route path="/test" element={<Test />} />
          </Route>
          <Route path="/expenses/:expenseId" element={<ExpenseItem />} />
          <Route path="/newExpense" element={<ExpenseForm />} />
          <Route path="/redux" element={<ReduxThunk />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
