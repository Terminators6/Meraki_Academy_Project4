
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navigation.css'


export const Navigation = () => {
	return (
		<div className="Nav">
			Navigation component
			<Link to="/Register"> Register </Link>
			<Link to="/Login"> Login </Link>
			<Link to="/Favorite"> Favorite </Link>
			<Link to="/Profile"> Profile </Link>
		</div>
	)

};


