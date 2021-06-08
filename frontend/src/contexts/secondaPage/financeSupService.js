import React, { useState } from 'react';
import axios from 'axios';

export const FinanceSupServiceContext = React.createContext();



const FinanceSupServiceProvider = (props) => {
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
        getFinanceSupService,
       
		
	};

	
    

	async function getFinanceSupService() {
		try {
			const res = await axios.get('http://localhost:5000/sup/finance');
			setService(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	
	return (
		<FinanceSupServiceContext.Provider value={state}>
			{props.children}
		</FinanceSupServiceContext.Provider>
	);
};

export default FinanceSupServiceProvider;

