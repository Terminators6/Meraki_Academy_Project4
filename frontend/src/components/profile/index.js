import React, { useState, useContext, useEffect } from 'react';

import { ProfileContext } from './../../contexts/profile';
import './profile.css'




export const Profile = () => {
    const profileContext = useContext(ProfileContext);

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
            {edit ?
                <form className="Profile" onSubmit={handelSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" defaultValue={profileContext.user.firstName} onChange={(e) => profileContext.setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" defaultValue={profileContext.user.lastName} onChange={(e) => profileContext.setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="Number" defaultValue={profileContext.user.age} onChange={(e) => profileContext.setAge(e.target.value)} />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" defaultValue={profileContext.user.country} onChange={(e) => profileContext.setCountry(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={profileContext.user.email}  onChange={(e)=> profileContext.setEmail(e.target.value)}/>
                    </div>
                    {/* <input type="password" placeholder="Password here" onChange={(e) => registerContext.setPassword(e.target.value)} /> */}
                    <div><button>Save Changes</button> </div>
                    {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                </form> : <div></div>}
        </div>

    )
}


