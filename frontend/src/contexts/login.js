import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  const state = {
    massage,
    setEmail,
    setPassword,
    Login,
    token,
    logout,
    loggedIn,
    setLoggedIn,
    saveToken,
    setMassage,
  };
  function saveToken(token) {
    const user = jwt.decode(token);
    if (user) {
      setToken(token);
      setUserId(user.userId);
      localStorage.setItem("token", token);
    }
  }

  async function Login() {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      setMassage("login Successfully");
      console.log(res);
      saveToken(res.data);
      setLoggedIn(true);
      setTimeout(function () {
        history.push("/");
        
      }, 1000);
    } catch (error) {
      setMassage(error.response.data);
    }
  }

  function logout() {
    localStorage.clear();
    setMassage('');
    setLoggedIn(false);
  }
  return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
};

export default LoginProvider;
