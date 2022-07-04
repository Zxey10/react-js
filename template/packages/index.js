import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./sass/index.css";


const Application = () => {
    return (
        <React.Fragment>
           
        </React.Fragment>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <Application />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
