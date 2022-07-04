import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss";
import { Layout, Landing, About, Products, Gallery, Contact } from "./pages";

const Application = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Layout>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <Application />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
