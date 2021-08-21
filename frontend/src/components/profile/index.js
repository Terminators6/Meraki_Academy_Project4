
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProfileContext } from "./../../contexts/profile";
import { LoginContext } from "../../contexts/login";
import "./profile.css";

export const Profile = () => {
    const profileContext = useContext(ProfileContext);
    const loginContext = useContext(LoginContext);
    const history = useHistory();
    const [edit, setEdit] = useState(true);
    const [delet, setDelet] = useState(false);
    const [nav, setNav] = useState(false);
    const [state, setState] = useState('');

    useEffect(() => {
        profileContext.getUserProfile();
        console.log("1....Profile useEffect", profileContext.user);
    }, []);

    useEffect(() => {
        profileContext.getUserProfile();
        console.log("2....updateUserProfile useEffect", profileContext.user);
    }, [edit]);

   
    

    const handelSubmit = (e) => {
        e.preventDefault();
        profileContext.updateUserProfile();
        setEdit(true);
        setNav(true);
    };

    const confirm = (email) =>{
        profileContext.setPassword(state)
        profileContext.confirmDelet(email);
    }

    return (
        <>
            <div> {!delet ? (
                <div className="main">
                    {!edit ? (
                        <form className="Profile" onSubmit={handelSubmit}>
                            <div>
                                <h2 className="reg">My Profile</h2>
                            </div>
                            <div className="hrStyle"></div>
                            <div className="EditProfile">
                                <label className="label1">First Name</label>
                                <input
                                    type="text"
                                    defaultValue={profileContext.firstName}
                                    onChange={(e) => profileContext.setFirstName(e.target.value)}
                                    className="styleInput"
                                />
                                <label className="label1">Last Name</label>
                                <input
                                    type="text"
                                    defaultValue={profileContext.lastName}
                                    onChange={(e) => profileContext.setLastName(e.target.value)}
                                    className="styleInput"
                                />

                                <label className="label1">Age</label>
                                <input
                                    type="Number"
                                    defaultValue={profileContext.age}
                                    onChange={(e) => profileContext.setAge(e.target.value)}
                                    className="styleInput"
                                />

                                <label className="label1">Country</label>
                                <input
                                    type="text"
                                    defaultValue={profileContext.country}
                                    onChange={(e) => profileContext.setCountry(e.target.value)}
                                    className="styleInput"
                                />

                                <label className="label1">Email</label>
                                <input type="text" defaultValue={profileContext.email} readOnly className="styleInput" />
                            </div>
                            <button className="button1 save">Save</button>
                            {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                            <button
                                className="button1 cancel"
                                onClick={() => {
                                    setEdit(!edit);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="button1 delete"
                                onClick={() => {
                                    {/* profileContext.deleteUserProfile(); */ }
                                    setDelet(true);
                                    confirm(profileContext.user.email)
                                }}
                            >
                                Delete
                            </button>
                            <div></div>
                        </form>
                    ) : (
                        <div className="card">
                            <img src="https://cutt.ly/qnUMxQg" className="img1" alt=''></img>
                            <div className="allInformatiom">
                                <div className="container">
                                    <label className="label2">First Name</label>
                                    <label className="label2"> {profileContext.user.firstName} </label>
                                </div>
                                <div className="container">
                                    <label className="label2">Last Name</label>
                                    <label className="label2">{profileContext.user.lastName}</label>
                                </div>
                                <div className="container">
                                    <label className="label2">Age</label>
                                    <label className="label2">{profileContext.user.age}</label>
                                </div>
                                <div className="container">
                                    <label className="label2">Country</label>
                                    <label className="label2">{profileContext.user.country}</label>
                                </div>
                                <div className="container">
                                    <label className="label2">Email </label>
                                    <label className="label2">{profileContext.user.email}</label>
                                </div>
                            </div>
                            <div className="container">
                                <button
                                    className="button1"
                                    onClick={() => {
                                        setEdit(!edit);
                                    }}
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            ) : (<div className="main">
                <h1 className="reg">Delete Confirmation</h1>
                {/* <h2 className="reg">Are you sure you want to delete this profile</h2> */}
                <div className="Profile">
                    <div className="container">
                        <label className="label2">Email </label>
                        <label className="label2">{profileContext.user.email}</label>
                    </div>
                    <div>
                        <input
                            type="Password"
                            placeholder="Please Enter Your Password Here"
                            onChange={(e) => {
                                setState(e.target.value);
                                profileContext.setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="button4" onClick={() => {confirm(profileContext.user.email)}}>confirm</button>
                        {profileContext.massage && <div>{profileContext.massage}</div>}
                    </div>
                </div>
            </div>)}
            </div>
        </>
    );
};

