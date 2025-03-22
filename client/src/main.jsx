import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import React from "react";
import "./index.css";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from './store';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
