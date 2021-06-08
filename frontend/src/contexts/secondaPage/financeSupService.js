import React, { useState } from 'react';
import axios from 'axios';

export const financeSupServiceContext = React.createContext();



const financeSupServiceProvider = (props) => {
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
        getfinanceSupService,
       
		
	};

	
    

	async function getfinanceSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/finance');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<financeSupServiceContext.Provider value={state}>
			{props.children}
		</financeSupServiceContext.Provider>
	);
};

export default financeSupServiceProvider;

