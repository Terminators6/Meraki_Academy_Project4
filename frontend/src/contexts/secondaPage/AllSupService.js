import React, { useState } from 'react';
import axios from 'axios';

export const AllSupServiceContext = React.createContext();



const AllSupServiceProvider = (props) => {
	const [service, setService] = useState('');
	const [img, setImg] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
	

	const state = {
        show,
		setShow,
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
			console.log(service);


		} catch (error) {
			console.log(error);

		}
	}
    
	

	

	return (
		<AllSupServiceContext.Provider value={state}>
			{props.children}
		</AllSupServiceContext.Provider>
	);
};

export default AllSupServiceProvider;

