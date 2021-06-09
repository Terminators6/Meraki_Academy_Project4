import React, { useState, useContext } from 'react';
import axios from 'axios';
import jwt from "jsonwebtoken";
import { LoginContext } from './login';

let userId;

export const ProfileContext = React.createContext();

const ProfileProvider = (props) => {
    const [user, setUser] = useState({ "Name": "T" });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('60be297bc1ce0378e4564f2a');


    const loginContext = useContext(LoginContext);

    const state = {
        setUser,
        user,
        setFirstName,
        setLastName,
        setAge,
        setCountry,
        setEmail,
        setPassword,
        setRole,
        getUserProfile,
        updateUserProfile,
        deleteUserProfile,
    };

    const token = loginContext.token || localStorage.getItem('token');

    function validationToken() {
        const user = jwt.decode(token);
        // if (!userId) {
        //     console.log(".........token error !userId ", user)
        //     // throw new Error();
        // }
        // else { 
            userId = user.userId;
        // }
    }

    async function getUserProfile() {
        console.log("get User Profile.......");
        try {
            validationToken();
            const res = await axios.get(`http://localhost:5000/profile/${userId}`)
            setUser(res.data);
            console.log('....setUser res.data', res.data)
        } catch (error) {
            console.log("error in getProfile frontend", error)
        }
    }

    async function updateUserProfile() {
        const user = { firstName, lastName, age, country, email}
        console.log("update User Profile.......");
        try {
            validationToken();
            console.log('....Edit User profile res.data',userId )
            await axios.put(`http://localhost:5000/profile/${userId}`,user)
            .then( (response) =>{
                console.log('....Edit User profile res.data',response.data )
            })
            
        } catch (error) {
            console.log("error in editUserProfile frontend", error)
        }
    }

    async function deleteUserProfile() {
        console.log("delete User Profile.......");
        // try {
        //     validationToken();
        //     const res = await axios.delete(`http://localhost:5000/profile/${userId}`)
        //     setUser(res.data);
        //     console.log('....Delete User profile res.data', res.data)
        // } catch (error) {
        //     console.log("error in deleteUserProfile frontend", error)
        // }
    }

    return (
        <ProfileContext.Provider value={state}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;