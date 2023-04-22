import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateContext from "./store/stateProvider";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={StateContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
