import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./../../../contexts/login";
import "./login.css";

const Login = () => {
  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.Login();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="Login">
        <input
          type="text"
          placeholder="Email Here"
          onChange={(e) => {
            loginContext.setEmail(e.target.value);
          }}
        />
        <input
          type="Password"
          placeholder="Password Here"
          onChange={(e) => {
            loginContext.setPassword(e.target.value);
          }}
        />

        <button>login</button>
        {loginContext.massage && <div>{loginContext.massage}</div>}
      </form>
    </>
  );
};

export default Login;
