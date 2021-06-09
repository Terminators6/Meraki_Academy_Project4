import React, { useState, useContext } from 'react';
import axios from 'axios';
import jwt from "jsonwebtoken";
import { LoginContext } from './login';

let userId;

export const ProfileContext = React.createContext();

const ProfileProvider = (props) => {
    const [user, setUser] = useState({ "Name": "T" });


    const loginContext = useContext(LoginContext);

    const state = {
        setUser,
        user,
        getUserProfile,
        updateUserProfile,


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
        console.log("update User Profile.......");
        try {
            validationToken();
            const res = await axios.put(`http://localhost:5000/profile/${userId}`)
            setUser(res.data);
            console.log('....Edit User profile res.data', res.data)
        } catch (error) {
            console.log("error in editUserProfile frontend", error)
        }
    }

    return (
        <ProfileContext.Provider value={state}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;