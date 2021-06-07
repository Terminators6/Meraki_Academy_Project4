import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'


export const Navigation = () => {
	return (
		<div className="Nav">
			Navigation component
			<Link to="/Register"> Register </Link>
			<Link to="/Login"> Login </Link>
			<Link to="/Favorite"> Favorite </Link>
		</div>
	)
};


