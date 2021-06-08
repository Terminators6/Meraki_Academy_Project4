import React, { useContext, useEffect } from 'react';
import {ProgrammingSupServiceContext} from '../../contexts/secondaPage/ProgrammingSupService';

const ProgrammingSupService = () => {
	const ProgrammingSupServiceContext = useContext(ProgrammingSupServiceContext);
    
	

	const handleClick = () => {
		ProgrammingSupServiceContext.getProgrammingSupService();
		
        ProgrammingSupServiceContext.setShow(!ProgrammingSupServiceContext.show);
	};



	

	return (
		<>
			<br />
			<button onClick={handleClick}>Get All ProgrammingSupService</button>
			
		</>
	);
};

export default ProgrammingSupService;
