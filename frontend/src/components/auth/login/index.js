import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./../../../contexts/login";
import { Footer } from "./../../footer/index";
import "./login.css";

const Login = () => {
  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.Login();
  };
  return (

    <>
      <div className="main">
        <form onSubmit={handleSubmit} className="Login">
          <h3 className="nameProfile"> Login </h3>
          <div>
            <input
              type="text"
              placeholder="Email Here"
              onChange={(e) => {
                loginContext.setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="Password"
              placeholder="Password Here"
              onChange={(e) => {
                loginContext.setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="button4">login</button>
            {loginContext.massage && <div>{loginContext.massage}</div>}
          </div></form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
