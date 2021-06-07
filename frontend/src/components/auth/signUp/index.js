import React from 'react';

export const Register = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="First Name here"/>
                <input type="text" placeholder="Last Name here"/>
                <input type="Number" placeholder="Age here"/>
                <input type="text" placeholder="Country here"/>
                <input type="email" placeholder="Email here"/>
                <input type="password" placeholder="Password here"/>
                <button>SignUp</button>
            </form>
            <div>
                message success or fail
            </div>
        </div>
    )
}



