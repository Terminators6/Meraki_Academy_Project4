import React, { useContext, useEffect } from 'react';
import {financeSupServiceContext} from './../../contexts/secondaPage/financeSupService';

const financeSupService = () => {
	const financeSupServiceContext = useContext(financeSupServiceContext);
    
	

	const handleClick = () => {
		financeSupServiceContext.getfinanceSupService();
		
        financeSupServiceContext.setShow(!financeSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All financeSupService</button>
			
		</>
	);
};

export default financeSupService;
