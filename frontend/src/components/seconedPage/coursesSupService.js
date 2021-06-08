import React, { useContext, useEffect } from 'react';
import {coursesSupServiceContext} from './../../contexts/secondaPage/coursesSupService';

const coursesSupService = () => {
	const coursesSupServiceContext = useContext(coursesSupServiceContext);
    
	

	const handleClick = () => {
		coursesSupServiceContext.getcoursesSupService();
		
        coursesSupServiceContext.setShow(!coursesSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All coursesSupService</button>
			
		</>
	);
};

export default coursesSupService;
