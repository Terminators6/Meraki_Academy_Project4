import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";
import FavoriteProvider, { FavoriteContext } from "./contexts/favorite";
import ServiceProvider, { ServiceContext } from "./contexts/ServicePage";
import RegisterProvider from "./contexts/signUp";

import AllSupServiceProvider from"./contexts/secondaPage/AllSupService"
  

import ProfileProvider from "./contexts/profile";

ReactDOM.render(
  <Router>
    <ServiceProvider>
      <FavoriteProvider>
        <RegisterProvider>
          <LoginProvider>
            <ProfileProvider>
            <AllSupServiceProvider>
              <App />
              </AllSupServiceProvider>
            </ProfileProvider>
          </LoginProvider>
        </RegisterProvider>
      </FavoriteProvider>
    </ServiceProvider>

  </Router>,
  document.getElementById("root")
);
