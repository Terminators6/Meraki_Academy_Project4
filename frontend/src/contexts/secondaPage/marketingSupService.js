import React, { useState } from 'react';
import axios from 'axios';

export const MarketingSupServiceContext = React.createContext();



const MarketingSupServiceProvider = (props) => {
	const [service, setService] = useState('');
	const [img, setImg] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
	

	const state = {
		service,
        show,
		setImg,
		setTitle,
		setDescription,
        getMarketingSupService,
       
		
	};

	
    

	async function getMarketingSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/marketing');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<MarketingSupServiceContext.Provider value={state}>
			{props.children}
		</MarketingSupServiceContext.Provider>
	);
};

export default MarketingSupServiceProvider;

