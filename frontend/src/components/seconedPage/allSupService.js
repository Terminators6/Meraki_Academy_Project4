import React, { useContext, useEffect,useState } from 'react';
import {AllSupServiceContext} from '../../contexts/secondaPage/AllSupService';

const AllSupService = () => {
	
	const allSupServiceContext = useContext(AllSupServiceContext);
    const [item, setItem] = useState([]);
    useEffect(() => {
		allSupServiceContext.getAllSupService();

		
	}, [])
	

	const handleClick = () => {
		const a=allSupServiceContext.service
		setItem(a.map((elem)=>{
			return elem.image
		}))
		console.log(a);
		console.log(item,"itemitem");
        // allSupServiceContext.setShow(!allSupServiceContext.show);
		console.log(allSupServiceContext.service,"gggggggggggg");

	};
	
    

	

	return (
		<>
		
			<br />
			<h1>allServices</h1>
			<button onClick={handleClick}>Get All supService</button>
			 <img src={item} onClick={} />
		</>
	);
};

export default AllSupService;
