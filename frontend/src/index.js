import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";
import FavoriteProvider, { FavoriteContext } from "./contexts/favorite";
import RegisterProvider from "./contexts/signUp";
import ProfileProvider from "./contexts/profile";

ReactDOM.render(
  <Router>
    <FavoriteProvider>
      <RegisterProvider>
        <LoginProvider>
          <ProfileProvider>
          <App />
          </ProfileProvider>
        </LoginProvider>
      </RegisterProvider>
    </FavoriteProvider>
  </Router>,
  document.getElementById("root")
);
