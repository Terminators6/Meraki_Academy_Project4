import React, { useState } from 'react';
import axios from 'axios';
// import { Register } from '../components/auth/signUp';

export const RegisterContext = React.createContext();

const RegisterProvider = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('60be297bc1ce0378e4564f2a');
    const [message, setMessage] = useState('');


    const state = {
        setFirstName, 
        setLastName, 
        setAge, 
        setCountry, 
        setEmail,
        setPassword, 
        setRole,
        addNewUser,
        message,
    };

    async function addNewUser(){
        try {
            console.log('.....axios....',{
                firstName,lastName,age,country,email, password,role
            });
            await axios.post('http://localhost:5000/register',{
                firstName,lastName,age,country,email, password,role
            }).then((result)=>{
                console.log('....axios result...',result);
                setMessage('The user has been created successfully ');

            })
        } catch (error) {
            setMessage('Error happened while register, please try again')
        }
    }

    return(
        <RegisterContext.Provider  value ={state}>
            {props.children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider;