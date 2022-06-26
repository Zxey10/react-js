import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { Header, Slider, Footer } from "./components";

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/root";

import "./sass/index.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Application = () => {
    return (
        <React.Fragment>
            <Header />

            <Slider />

            <Footer />
        </React.Fragment>
    );
};

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
