import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { LoginContext } from './login';
import axios from 'axios';

import jwt from "jsonwebtoken";

let userId;

export const ProfileContext = React.createContext();

const ProfileProvider = (props) => {

    const history = useHistory();

    const [user, setUser] = useState({ "Name": "T" });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('60be297bc1ce0378e4564f2a');
    const [message, setMessage] = useState('...');
    const [loggedIn, setLoggedIn] = useState(true);


    const loginContext = useContext(LoginContext);

    const state = {
        setUser,
        user,
        setFirstName,
        firstName,
        lastName,
        age,
        country,
        email,
        loggedIn,
        message,
        setMessage,
        setLastName,
        setAge,
        setCountry,
        setEmail,
        setPassword,
        setRole,
        getUserProfile,
        updateUserProfile,
        deleteUserProfile,
        confirmDelet,
    };


    const token = loginContext.token || localStorage.getItem("token");

    function validationToken() {
        const user = jwt.decode(token);
        userId = user.userId;
    }

    async function getUserProfile() {
        console.log("get User Profile.......");
        try {
            validationToken();
            const res = await axios.get(`http://localhost:5000/profile/${userId}`);
            setUser(res.data);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setAge(res.data.age);
            setCountry(res.data.country);
            setEmail(res.data.email);
            console.log("....setUser res.data", res.data);
        } catch (error) {
            console.log("error in getProfile frontend", error);
        }
    }


    async function updateUserProfile() {
        const user = { firstName, lastName, age, country, email }
        console.log("update User Profile.......");
        try {
            validationToken();
            console.log('....Edit User profile res.data', userId)
            await axios.put(`http://localhost:5000/profile/${userId}`, user)
                .then((response) => {
                    setMessage("User Profile Updated Successfully");
                    history.push('/Profile');
                    console.log('....Edit User profile ..', response)
                })

        } catch (error) {
            setMessage("Error happened while update, Please try again");
            history.push('/Profile');
            console.log("error in editUserProfile frontend", error)
        }
    }

    //confirm delete Profile
    async function confirmDelet(email) {
        try {
            const res = await axios.post("http://localhost:5000/login", {
                email,
                password,
            });
            console.log("......1   confirmDelet.....");
            deleteUserProfile();
            setMessage("Profile deleted Successfully");
            setTimeout(function () {
                history.push("/");
            }, 1000);
        } catch (error) {
            setMessage("Please Try again");
        }
    }


    async function deleteUserProfile() {
        await localStorage.clear();
        console.log("delete User Profile.......");
        try {
            validationToken();
            const res = await axios.delete(`http://localhost:5000/profile/${userId}`);
            setUser(res.data);
            console.log("....Delete User profile .....2....", res.data);
            localStorage.clear();
            console.log("setLoggedIn...............",loginContext.loggedIn)
            loginContext.setLoggedIn(false);
            setMessage("User Profile Deleted Successfully");
            setTimeout(() => {
                history.push("/");
            }, 1000);
        } catch (error) {
            setMessage("Error happened while delete user profile, Please try again");
            console.log("error in deleteUserProfile frontend", error);
        }
    }


    return <ProfileContext.Provider value={state}>{props.children}</ProfileContext.Provider>;
};

export default ProfileProvider;
