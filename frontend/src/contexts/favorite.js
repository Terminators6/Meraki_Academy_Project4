import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const FavoriteContext = React.createContext();

const FavoriteProvider = (props) => {
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
    token,
  };

  function saveToken(token) {
    const user = jwt.decode(token);
    if (user) {
      setToken(token);
      setUserId(user.userId);
      localStorage.setItem("token", token);
    }
  }

  return (
    <FavoriteContext.Provider value={state}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
