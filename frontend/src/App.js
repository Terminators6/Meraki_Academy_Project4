import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import favorite from "./components/favorite/favorite";

const App = () => {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/favorite" component={favorite} />
    </div>
  );
};

export default App;
