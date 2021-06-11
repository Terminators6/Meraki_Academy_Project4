import React, { useState } from "react";
import AllSupService from "./components/seconedPage/allSupService";
import BusinessSupService from "./components/seconedPage/BusinessSupService";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation/index";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Main } from "./components/main/index";
import { Register } from "./components/auth/signUp";
import { Programing } from "./components/servicePage/programing";
import Login from "./components/auth/login/index";
import favorite from "./components/favorite/favorite";
import aboutUs from "./components/aboutUs/aboutUs";
import { Video } from "./components/video/video";
import { Profile } from "./components/profile/index";
import { Logout } from "./components/logout";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/aboutUs" component={aboutUs} />
        <Route path="/Favorite" component={favorite} />
        <Route exact path="/allServices" component={AllSupService} />
        <Route path="/profile" component={Profile} />
        <Route path="/programming/:userId" component={Programing} />
        <Route path="/business/:userId" component={Programing} />
        <Route path="/finance/:userId" component={Programing} />
        <Route path="/courses/:userId" component={Programing} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/:type" component={BusinessSupService} />
        <Header />
        <Main />
        <Footer />
      </Switch>
    </div>
  );
};

export default App;
