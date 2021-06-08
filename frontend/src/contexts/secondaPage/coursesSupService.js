import React, { useState } from 'react';
import axios from 'axios';

export const coursesSupServiceContext = React.createContext();



const coursesSupServiceProvider = (props) => {
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
        getcoursesSupService,
       
		
	};

	
    

	async function getcoursesSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/courses');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<coursesSupServiceContext.Provider value={state}>
			{props.children}
		</coursesSupServiceContext.Provider>
	);
};

export default coursesSupServiceProvider;

