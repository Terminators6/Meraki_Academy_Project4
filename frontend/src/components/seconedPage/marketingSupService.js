import React, { useContext, useEffect } from 'react';
import {marketingSupServiceContext} from './../../contexts/secondaPage/marketingSupService';

const marketingSupService = () => {
	const marketingSupServiceContext = useContext(marketingSupServiceContext);
    
	

	const handleClick = () => {
		marketingSupServiceContext.getmarketingSupService();
		
        marketingSupServiceContext.setShow(!marketingSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All marketingSupService</button>
			
		</>
	);
};

export default marketingSupService;
