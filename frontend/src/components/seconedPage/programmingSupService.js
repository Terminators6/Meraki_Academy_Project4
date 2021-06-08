import React, { useContext, useEffect } from 'react';
import {programmingSupServiceContext} from './../../contexts/secondaPage/programmingSupService';

const programmingSupService = () => {
	const programmingSupServiceContext = useContext(programmingSupServiceContext);
    
	

	const handleClick = () => {
		programmingSupServiceContext.getprogrammingSupService();
		
        programmingSupServiceContext.setShow(!programmingSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All programmingSupService</button>
			
		</>
	);
};

export default programmingSupService;
