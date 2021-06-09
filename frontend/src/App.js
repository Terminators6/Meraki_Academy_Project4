import React from "react";
import AllSupService from "./components/seconedPage/allSupService";
import BusinessSupService from "./components/seconedPage/BusinessSupService";
import CoursesSupService from "./components/seconedPage/coursesSupService";
import FinanceSupService from "./components/seconedPage/financeSupService";
import MarketingSupService from "./components/seconedPage/marketingSupService";
import ProgrammingSupService from "./components/seconedPage/programmingSupService";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation/index";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Main } from "./components/main/index";
import { Register } from "./components/auth/signUp";
import { Programing } from "./components/servicePage/programing";
import Login from "./components/auth/login/index";
import favorite from "./components/favorite/favorite";

import { Video } from "./components/video/video";

import { Profile } from "./components/profile/index";

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

          	
	<Route exact path="/AllSupService" component={AllSupService} />

	<Route path="/business" component={BusinessSupService} />

	<Route path="/courses" component={CoursesSupService} />

	<Route path="/finance" component={FinanceSupService} />

	<Route path="/marketing" component={MarketingSupService} />

	<Route path="/programming" component={ProgrammingSupService} />

        <Route path="/profile" component={Profile} />
        <Route path="/programing/:userId" component={Programing} />


        <Header />
        <Main />
        <Footer />
      </Switch>
    </div>
  );
};

export default App;
