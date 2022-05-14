import React from "react";
import styles from "./App.module.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/welcome' replace />}/>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
