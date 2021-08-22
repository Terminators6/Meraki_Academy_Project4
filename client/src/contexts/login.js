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
      const res = await axios.post("/login", {
        email,
        password,
      });

      setMassage("login Successfully");
      setLoggedIn(true);
      console.log("from Logincontext  loggedIn is.....", loggedIn);
      console.log(res);
      saveToken(res.data);
      setTimeout(function () {
        history.push("/");
      }, 500);
    } catch (error) {
      setMassage(error.response.data);
    }
  }

  function logout() {
    localStorage.clear();
    setMassage("");
    setLoggedIn(false);
  }
  return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
};

export default LoginProvider;
