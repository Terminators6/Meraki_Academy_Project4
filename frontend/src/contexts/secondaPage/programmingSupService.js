import React, { useState } from 'react';
import axios from 'axios';

export const programmingSupServiceContext = React.createContext();



const programmingSupServiceProvider = (props) => {
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
        getprogrammingSupService,
       
		
	};

	
    

	async function getprogrammingSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/programming');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<programmingSupServiceContext.Provider value={state}>
			{props.children}
		</programmingSupServiceContext.Provider>
	);
};

export default programmingSupServiceProvider;

