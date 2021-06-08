import React, { useContext, useEffect } from 'react';

import  {ProfileContext}  from './../../contexts/profile';


export const Profile = () => {
    const profileContext = useContext(ProfileContext);

    useEffect(() => {
        console.log('....Profile useEffect', profileContext.user);
        profileContext.getUserProfile();
    }, [])

    return (
        <div>
            <h3>Profile</h3>
            <div>firstName: {profileContext.user.firstName}</div>
            <div>LastName: {profileContext.user.lastName}</div>
            <div>Age: {profileContext.user.age}</div>
            <div>Email: {profileContext.user.email}</div>
            <div>Country: {profileContext.user.country}</div>
        </div>
    )
}


