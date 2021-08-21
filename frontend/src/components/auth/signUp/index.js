import React, { useContext } from "react";
import { RegisterContext } from "./../../../contexts/signUp";

import { Footer } from "./../../footer/index";

import "./signUp.css";

export const Register = () => {
  const registerContext = useContext(RegisterContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    registerContext.addNewUser();
  };

  return (
    <>
      <div className="main">
        <form className="Profile" onSubmit={handelSubmit}>
          <h3 className="nameProfile"> SignUp </h3>
          <div>
            <input
              type="text"
              placeholder="First Name here"
              onChange={(e) => registerContext.setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name here"
              onChange={(e) => registerContext.setLastName(e.target.value)}
            />
          </div>
          <div>
            <input type="Number" placeholder="Age here" onChange={(e) => registerContext.setAge(e.target.value)} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country here"
              onChange={(e) => registerContext.setCountry(e.target.value)}
            />
          </div>
          <div>
            <input type="text" placeholder="Email here" onChange={(e) => registerContext.setEmail(e.target.value)} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password here"
              onChange={(e) => registerContext.setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="button4">SignUp</button>
          </div>
          <div>{registerContext.message && <div> {registerContext.message} </div>}</div>
          <div></div>
        </form>
      </div>
    </>
  );
};
