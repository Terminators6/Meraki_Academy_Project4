import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

//context Providers
import RegisterProvider from './contexts/signUp';


ReactDOM.render(

	<Router>
		<RegisterProvider>
			<App />
		</RegisterProvider>
	</Router>,
	
	document.getElementById('root'),
);
