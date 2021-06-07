import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//providers context
import LoginProvider, { LoginContext } from "./contexts/login";
import RegisterProvider from './contexts/signUp';


ReactDOM.render(

	<Router>
		<RegisterProvider>
       <LoginProvider>
			    <App />
      </LoginProvider>
		</RegisterProvider>
	</Router>,
	
	document.getElementById('root'),
);
