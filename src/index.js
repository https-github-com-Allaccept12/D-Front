import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./NavComponents/ScrollTop";
import store from "./redux/store";
import { Provider } from "react-redux";
import "tw-elements";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollTop />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
