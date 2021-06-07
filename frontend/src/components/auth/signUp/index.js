import React, { useContext } from 'react';
import { RegisterContext } from './../../../contexts/signUp';

export const Register = () => {

    const registerContext = useContext(RegisterContext);

    const handelSubmit =(e) => {
        e.preventDefault();
        registerContext.addNewUser();
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="First Name here" onChange={(e) => registerContext.setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name here" onChange={(e) => registerContext.setLastName(e.target.value)} />
                <input type="Number" placeholder="Age here" onChange={(e) => registerContext.setAge(e.target.value)} />
                <input type="text" placeholder="Country here" onChange={(e) => registerContext.setCountry(e.target.value)}/>
                <input type="email" placeholder="Email here" onChange={(e) => registerContext.setEmail(e.target.value)}/>
                <input type="password" placeholder="Password here" onChange={(e) => registerContext.setPassword(e.target.value)}/>
                <button>SignUp</button>
            </form>
            {registerContext.message&&<div>{registerContext.message}</div>}
        </div>
    )
}



