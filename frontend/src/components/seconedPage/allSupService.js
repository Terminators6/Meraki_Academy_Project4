import React, { useContext, useEffect } from 'react';
import {AllSupServiceContext} from '../../contexts/secondaPage/AllSupService';

const AllSupService = () => {
	const allSupServiceContext = useContext(AllSupServiceContext);
    
	

	const handleClick = () => {
		allSupServiceContext.getAllSupService();
		
        allSupServiceContext.setShow(!allSupServiceContext.show);
	};



	

	return (
		<>
		
			<br />
			<h1>allServices</h1>
			<button onClick={handleClick}>Get All supService</button>
			{/* <img src="" onclik={} /> */}
		</>
	);
};

export default AllSupService;
