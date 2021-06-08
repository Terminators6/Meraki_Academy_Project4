import React, { useContext, useEffect } from 'react';
import {allSupServiceContext} from './../../contexts/secondaPage/AllSupService';

const allSupService = () => {
	const allSupServiceContext = useContext(allSupServiceContext);
    
	

	const handleClick = () => {
		allSupServiceContext.getAllSupService();
		
        allSupServiceContext.setShow(!allSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All supService</button>
			
		</>
	);
};

export default allSupService;
