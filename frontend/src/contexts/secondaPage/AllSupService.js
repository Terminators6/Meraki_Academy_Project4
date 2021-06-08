import React, { useState } from 'react';
import axios from 'axios';

export const allSupServiceContext = React.createContext();



const allSupServiceProvider = (props) => {
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
		getAllSupService,
       
		
	};

	
    async function getAllSupService() {
		try {
			const res = await axios.get('http://localhost:5000/allServices');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	

	return (
		<allSupServiceContext.Provider value={state}>
			{props.children}
		</allSupServiceContext.Provider>
	);
};

export default allSupServiceProvider;

