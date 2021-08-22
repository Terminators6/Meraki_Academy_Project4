import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./../../../contexts/login";
import "./login.css";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.Login();
  };

  const loginWithGoogle = async (response) => {
    async function goo() {
      const res = await axios.post("/login", {
        email: response.Ts.Et,
        password: "123",
      });
      loginContext.setMassage("login Successfully");
      loginContext.saveToken(res.data);
      loginContext.setLoggedIn(true);
    }
    goo();
    //
    //go data base and save the response if the response
    // exists login directly if not signup this user
    // in data base and put the role_id is 2 like user
    console.log(response.Ts.Et);
    localStorage.setItem("token", response.accessToken);
    history.push("/");
    loginContext.setLoggedIn(true);
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
          <GoogleLogin
            clientId="701876201185-nj6jqs8eqjrehl98410phe5vu3spjfgb.apps.googleusercontent.com"
            buttonText="login with google"
            onSuccess={loginWithGoogle}
            onFailure={loginWithGoogle}
            cookiePolicy={"single_host_origin"}
            className="pointer marg styleButton1"
          />
          <div>
            <button className="button4">login</button>
            {loginContext.massage && <div>{loginContext.massage}</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
