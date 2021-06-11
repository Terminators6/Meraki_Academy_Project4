import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { ProfileContext } from './../../contexts/profile';
import './profile.css'




export const Profile = () => {
    const profileContext = useContext(ProfileContext);
    const history = useHistory()
    const [edit, setEdit] = useState(true);
    const [del, setDel] = useState(false);


    useEffect(() => {
        profileContext.getUserProfile();
        console.log('....Profile useEffect', profileContext.user);

    }, [])

    const handelSubmit = (e) => {
        e.preventDefault();
        profileContext.updateUserProfile();
        console.log("....handel edit", edit)
        // history.push('./Profile')
        // setEdit(!edit);
        
    }

    const handelDelete = (e) => {
        e.preventDefault();
        profileContext.deleteUserProfile();
        console.log("....handel delete................", edit)
        

    }



    return (
        <div className="main">
            {!edit ?

                <div className="Profile">
                    <form  onSubmit={handelSubmit}>
                        <div><h2 className="nameProfile">{profileContext.firstName} {profileContext.lastName} Profile</h2></div>
                        <div className="hrStyle"></div>
                        <div className="EditProfile">

                            <label className="label1">First Name</label>
                            <input type="text" defaultValue={profileContext.firstName} onChange={(e) => profileContext.setFirstName(e.target.value)} className="styleInput" />


                            <label className="label1">Last Name</label>
                            <input type="text" defaultValue={profileContext.lastName} onChange={(e) => profileContext.setLastName(e.target.value)} className="styleInput" />


                            <label className="label1">Age</label>
                            <input type="Number" defaultValue={profileContext.age} onChange={(e) => profileContext.setAge(e.target.value)} className="styleInput" />


                            <label className="label1">Country</label>
                            <input type="text" defaultValue={profileContext.country} onChange={(e) => profileContext.setCountry(e.target.value)} className="styleInput" />


                            <label className="label1">Email</label>
                            <input type="text" defaultValue={profileContext.email} readOnly className="styleInput" />


                        </div>
                        <button className="button1 save" >Save</button>
                        {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                        <button className="button1 cancel" onClick={() => { setEdit(!edit) }}>Cancel</button>
                        
                        <button className="button1 delete" onClick={() => { profileContext.deleteUserProfile(); history.push('/Register') }}>Delete</button>
                
                        <div></div>
                    </form>
                </div>





                :



                <div className="card">

                    <div className="toast">{profileContext.message}</div>
                    <img src="https://cutt.ly/qnUMxQg"></img>
                    <div className="allInformatiom">
                        <div className="container">
                            <label className="label2">First Name</label>
                            <label className="label2"> {profileContext.firstName} </label>
                            {/* <input type="text" value={profileContext.user.firstName} readOnly /> */}
                        </div>
                        <div className="container">
                            <label className="label2">Last Name</label>
                            <label className="label2">{profileContext.lastName}</label>
                            {/* <input type="text" value={profileContext.user.lastName} readOnly /> */}
                        </div>
                        <div className="container">
                            <label className="label2">Age</label>
                            <label className="label2">{profileContext.age}</label>
                            {/* <input type="Number" value={profileContext.user.age} readOnly/> */}
                        </div>
                        <div className="container">
                            <label className="label2">Country</label>
                            <label className="label2">{profileContext.country}</label>
                            {/* <input type="text" value={profileContext.user.country} readOnly/> */}
                        </div>
                        <div className="container">
                            <label className="label2">Email :</label>
                            <label className="label2">{profileContext.email}</label>
                            {/* <input type="text" value={profileContext.user.email} readOnly/> */}
                        </div>
                    </div>
                    <div className="container">
                        <button className="button1" onClick={() => { setEdit(!edit) }}>Edit Profile</button>
                    </div>
                    </div>
            }
        </div>
    )
}








        

























