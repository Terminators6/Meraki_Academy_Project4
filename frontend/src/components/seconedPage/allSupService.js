import React, { useContext, useEffect } from 'react';
import {AllSupServiceContext} from '../../contexts/secondaPage/AllSupService';

const AllSupService = () => {
	const AllSupServiceContext = useContext(AllSupServiceContext);
    
	

	const handleClick = () => {
		AllSupServiceContext.getAllSupService();
		
        AllSupServiceContext.setShow(!AllSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All supService</button>
			
		</>
	);
};

export default AllSupService;
