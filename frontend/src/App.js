import React from 'react';
import { Route } from 'react-router-dom';
import allSupService from './components/seconedPage/allSupService';
import BusinessSupService from './components/seconedPage/BusinessSupService';
import coursesSupService from './components/seconedPage/coursesSupService';
import financeSupService from './components/seconedPage/financeSupService';
import marketingSupService from './components/seconedPage/marketingSupService';
import programmingSupService from './components/seconedPage/programmingSupService';
import Navigation from './components/navigation/index';
const App = () => {
	return <div className="App">
	<Navigation />
	
	<Route path="/allServices" component={allSupService} />

	<Route path="/sup/business" component={BusinessSupService} />

	<Route path="/sup/courses" component={coursesSupService} />

	<Route path="/sup/finance" component={financeSupService} />

	<Route path="/sup/marketing" component={marketingSupService} />

	<Route path="/sup/programming" component={programmingSupService} />
	</div>
};

export default App;
