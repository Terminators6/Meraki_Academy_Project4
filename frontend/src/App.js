
import React from 'react';
import AllSupService from './components/seconedPage/AllSupService';
import BusinessSupService from './components/seconedPage/BusinessSupService';
import CoursesSupService from './components/seconedPage/CoursesSupService';
import FinanceSupService from './components/seconedPage/FinanceSupService';
import MarketingSupService from './components/seconedPage/MarketingSupService';
import ProgrammingSupService from './components/seconedPage/ProgrammingSupService';
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

          	
	<Route path="/allServices" component={AllSupService} />

	<Route path="/sup/business" component={BusinessSupService} />

	<Route path="/sup/courses" component={CoursesSupService} />

	<Route path="/sup/finance" component={FinanceSupService} />

	<Route path="/sup/marketing" component={MarketingSupService} />

	<Route path="/sup/programming" component={ProgrammingSupService} />

        <Header />
        <Main />
        <Footer />
      </Switch>
    </div>
  );

};

export default App;
