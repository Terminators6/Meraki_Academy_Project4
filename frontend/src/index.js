import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";
import FavoriteProvider, { FavoriteContext } from "./contexts/favorite";
import RegisterProvider from './contexts/signUp';

ReactDOM.render(
  <Router>
    <favoriteProvider>
  <RegisterProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
  </RegisterProvider>
    </favoriteProvider>
  </Router>,
  document.getElementById("root")

);
