import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from './components/navigation/index';
import { Header } from './components/header/index';
import { Footer } from './components/footer/index';
import { Main } from './components/main/index';
import { Register } from './components/auth/signUp';
import Login from "./components/auth/login/index";

import favorite from "./components/favorite/favorite";


    
    
  
  

import './App.css';


const App = () => {
	return ( 
   <div className="App">
        App component
		    <Navigation/>
		    <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/favorite" component={favorite} />
		    <Header/>
		    <Main/>
		    <Footer/>
	</div>)

};

export default App;
