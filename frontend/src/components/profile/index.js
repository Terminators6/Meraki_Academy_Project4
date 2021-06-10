import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { ProfileContext } from './../../contexts/profile';
import './profile.css'




export const Profile = () => {
    const profileContext = useContext(ProfileContext);
    const history = useHistory()
    const [edit, setEdit] = useState(true);


    useEffect(() => {
        profileContext.getUserProfile();
        console.log('....Profile useEffect', profileContext.user);

    }, [])

    const handelSubmit = (e) => {
        e.preventDefault();
        profileContext.updateUserProfile();
    }



    return (

        <div className="main">
            {!edit ?


                <form className="Profile" onSubmit={handelSubmit}>
                    <div><h1>{profileContext.firstName} {profileContext.lastName} Profile</h1></div>
                    <hr></hr>
                    <div className="EditProfile">
                
                            <label>First Name</label>
                            <input type="text" defaultValue={profileContext.firstName} onChange={(e) => profileContext.setFirstName(e.target.value)} />
                    
                
                            <label>Last Name</label>
                            <input type="text" defaultValue={profileContext.lastName} onChange={(e) => profileContext.setLastName(e.target.value)} />
                
                
                            <label>Age</label>
                            <input type="Number" defaultValue={profileContext.age} onChange={(e) => profileContext.setAge(e.target.value)} />
                    
                
                            <label>Country</label>
                            <input type="text" defaultValue={profileContext.country} onChange={(e) => profileContext.setCountry(e.target.value)} />
                    
                
                            <label>Email</label>
                            <input type="text" defaultValue={profileContext.email} readOnly />
                    
                    </div>
                    <button className="button save">Save</button>
                    {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                    <button className="button cancel" onClick={() => { setEdit(!edit) }}>Cancel</button>
                    <button className="button delete" onClick={() => { profileContext.deleteUserProfile(); history.push('/') }}>Delete</button>
                    <div></div>
                </form>





                :



                <div className="card">
                    <img src="https://cutt.ly/qnUMxQg"></img>
                    <div className="container">
                        <label>First Name</label>
                        <label > {profileContext.user.firstName} </label>
                        {/* <input type="text" value={profileContext.user.firstName} readOnly /> */}
                    </div>
                    <div className="container">
                        <label>Last Name</label>
                        <label>{profileContext.user.lastName}</label>
                        {/* <input type="text" value={profileContext.user.lastName} readOnly /> */}
                    </div>
                    <div className="container">
                        <label>Age</label>
                        <label>{profileContext.user.age}</label>
                        {/* <input type="Number" value={profileContext.user.age} readOnly/> */}
                    </div>
                    <div className="container">
                        <label>Country</label>
                        <label>{profileContext.user.country}</label>
                        {/* <input type="text" value={profileContext.user.country} readOnly/> */}
                    </div>
                    <div className="container">
                        <label>Email</label>
                        <label>{profileContext.user.email}</label>
                        {/* <input type="text" value={profileContext.user.email} readOnly/> */}
                    </div>
                    <div className="container">
                        <button onClick={() => { setEdit(!edit) }}>Edit Profile</button>
                    </div>
                </div>
            }
        </div>
    )
}



