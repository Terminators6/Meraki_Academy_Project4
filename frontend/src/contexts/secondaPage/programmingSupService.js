import React, { useState } from 'react';
import axios from 'axios';

export const ProgrammingSupServiceContext = React.createContext();



const ProgrammingSupServiceProvider = (props) => {
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
        getProgrammingSupService,
       
		
	};

	
    

	async function getProgrammingSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/programming');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<ProgrammingSupServiceContext.Provider value={state}>
			{props.children}
		</ProgrammingSupServiceContext.Provider>
	);
};

export default ProgrammingSupServiceProvider;

