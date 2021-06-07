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
  const [loggedIn, setLoggedIn] = useState(false);

  const state = {
    massage,
    setEmail,
    setPassword,
    Login,
    token,
    logout,
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

      console.log(res);
      setMassage("login Successfully");
      saveToken(res.data);
      setLoggedIn(true);
      setTimeout(function () {
        history.push("/home");
      }, 2000);
    } catch (error) {
      setMassage(error.response.data);
    }
  }

  function logout() {
    setLoggedIn(true);
    localStorage.clear();
  }
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
