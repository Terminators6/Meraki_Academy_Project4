import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Navigation = () => {
	
	const history = useHistory();

	const handleClick = () => {
		history.push('/login');
		 loginContext.logout();
	};

	return (
		<>
			{localStorage.getItem('token') ? (
				<>
					<Link to="/allServices">all_Services</Link>
					&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
					<Link to="/sup/courses">sup_courses</Link>
					&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
					
				</>
			) : (
				<>
					<Link to="/sup/finance">sup_finance</Link>
					&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
					<Link to="/sup/marketing">sup_marketing</Link>
					<Link to="/sup/programming">sup_programming</Link>
					&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
					<Link to="/sup/business">sup_business</Link>
				</>
			)}
		</>
	);
};

export default Navigation;
