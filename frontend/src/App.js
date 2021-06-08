import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation/index";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Main } from "./components/main/index";
import { Register } from "./components/auth/signUp";
import { Programing } from "./components/servicePage/programing";

import Login from "./components/auth/login/index";
import favorite from "./components/favorite/favorite";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      App component
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/favorite" component={favorite} />
        <Route path="/programing/:userId" component={Programing} />
        <Header />
        <Main />
        <Footer />
      </Switch>
    </div>
  );
};

export default App;
