import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";

ReactDOM.render(
  <Router>
    <LoginProvider>
      <App />
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
