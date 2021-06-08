import React, { useContext } from 'react';
import { RegisterContext } from './../../../contexts/signUp';
import './signUp.css';

export const Register = () => {

    const registerContext = useContext(RegisterContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        registerContext.addNewUser();
    }

    return (
        <>
            <h3> Register </h3>
            <form className="Register" onSubmit={handelSubmit}>
                <input type="text" placeholder="First Name here" onChange={(e) => registerContext.setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name here" onChange={(e) => registerContext.setLastName(e.target.value)} />
                <input type="Number" placeholder="Age here" onChange={(e) => registerContext.setAge(e.target.value)} />
                <input type="text" placeholder="Country here" onChange={(e) => registerContext.setCountry(e.target.value)} />
                <input type="text" placeholder="Email here" onChange={(e) => registerContext.setEmail(e.target.value)} />
                <input type="password" placeholder="Password here" onChange={(e) => registerContext.setPassword(e.target.value)} />
                <button>SignUp</button>
                {registerContext.message && <div> {registerContext.message} </div>}
            </form>
        </>
    )
}



