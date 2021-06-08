import React, { useContext, useEffect } from 'react';
import {BusinessSupServiceContext} from './../../contexts/secondaPage/BusinessSupService';

const BusinessSupService = () => {
	const BusinessSupServiceContext = useContext(BusinessSupServiceContext);
    
	

	const handleClick = () => {
		BusinessSupServiceContext.getBusinessSupService();
		
        BusinessSupServiceContext.setShow(!BusinessSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All BusinessSupService</button>
			
		</>
	);
};

export default BusinessSupService;
