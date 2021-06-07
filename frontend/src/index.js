import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";
import FavoriteProvider, { FavoriteContext } from "./contexts/favorite";

ReactDOM.render(
  <Router>
    <favoriteProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </favoriteProvider>
  </Router>,
  document.getElementById("root")
);
