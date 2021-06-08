import React, { useState } from 'react';
import axios from 'axios';

export const BusinessSupServiceContext = React.createContext();



const BusinessSupServiceProvider = (props) => {
	const [service, setService] = useState('');
	const [img, setImg] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
	

	const state = {
        show,
		service,
		setImg,
		setTitle,
		setDescription,
        getBusinessSupService,
       
		
	};

	
    

	async function getBusinessSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/business');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<BusinessSupServiceContext.Provider value={state}>
			{props.children}
		</BusinessSupServiceContext.Provider>
	);
};

export default BusinessSupServiceProvider;

