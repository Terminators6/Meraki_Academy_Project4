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

        <div>
            {!edit ?
                <form className="Profile" onSubmit={handelSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" defaultValue={profileContext.firstName} onChange={(e) => profileContext.setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" defaultValue={profileContext.lastName} onChange={(e) => profileContext.setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="Number" defaultValue={profileContext.age} onChange={(e) => profileContext.setAge(e.target.value)} />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" defaultValue={profileContext.country} onChange={(e) => profileContext.setCountry(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" defaultValue={profileContext.email} readOnly />
                    </div>
                    <div><button>Save Changes</button> </div>
                    {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                    <div><button onClick={()=>{setEdit(!edit)}}>Cancel</button> </div>
                    <div><button onClick={()=>{profileContext.deleteUserProfile();history.push('/')}}>Delete Account</button> </div>
                </form>
                




                : 
                
                

                <div><div>
                    <label>First Name</label>
                    <input type="text" value={profileContext.user.firstName} readOnly />
                </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={profileContext.user.lastName} readOnly />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="Number" value={profileContext.user.age} readOnly/>
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" value={profileContext.user.country} readOnly/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={profileContext.user.email} readOnly/>
                        <div><button onClick={()=>{setEdit(!edit)}}>Edit Profile</button> </div>
                    </div></div>
            }
        </div>
    )
}



