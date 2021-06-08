import React, { useState } from 'react';
import axios from 'axios';

export const marketingSupServiceContext = React.createContext();



const marketingSupServiceProvider = (props) => {
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
        getmarketingSupService,
       
		
	};

	
    

	async function getmarketingSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/marketing');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<marketingSupServiceContext.Provider value={state}>
			{props.children}
		</marketingSupServiceContext.Provider>
	);
};

export default marketingSupServiceProvider;

