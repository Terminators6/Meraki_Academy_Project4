import React, { useState, useContext, useEffect } from 'react';

import { ProfileContext } from './../../contexts/profile';
import './profile.css'




export const Profile = () => {
    const profileContext = useContext(ProfileContext);
    
    const [edit, setEdit] = useState(true);


    useEffect(() => {
        console.log('....Profile useEffect', profileContext.user);
        profileContext.getUserProfile();
    }, [])



    return (

        <div>
            {edit ?
                <div className="Profile" >
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name here" value={profileContext.user.firstName} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name here" value={profileContext.user.lastName} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="Number" placeholder="Age here" value={profileContext.user.age} />
                    </div>
                    <div>
                        <label>Country</label>
                        <input type="text" placeholder="Country here" value={profileContext.user.country} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Email here" value={profileContext.user.email} />
                    </div>
                    {/* <input type="password" placeholder="Password here" onChange={(e) => registerContext.setPassword(e.target.value)} /> */}
                    <div><button onClick={profileContext.updateUserProfile()}>Save Changes</button> <button>Delete Account</button></div>
                    {/* {registerContext.message && <div> {registerContext.message} </div>} */}
                </div> : <div></div>}
        </div>

    )
}


