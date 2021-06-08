
import React from 'react';
import allSupService from './components/seconedPage/allSupService';
import BusinessSupService from './components/seconedPage/BusinessSupService';
import coursesSupService from './components/seconedPage/coursesSupService';
import financeSupService from './components/seconedPage/financeSupService';
import marketingSupService from './components/seconedPage/marketingSupService';
import programmingSupService from './components/seconedPage/programmingSupService';
import Navigation from './components/navigation/index';
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation/index";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Main } from "./components/main/index";
import { Register } from "./components/auth/signUp";
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
          	
	<Route path="/allServices" component={allSupService} />

	<Route path="/sup/business" component={BusinessSupService} />

	<Route path="/sup/courses" component={coursesSupService} />

	<Route path="/sup/finance" component={financeSupService} />

	<Route path="/sup/marketing" component={marketingSupService} />

	<Route path="/sup/programming" component={programmingSupService} />
        <Header />
        <Main />
        <Footer />
      </Switch>
    </div>
  );

};

export default App;
