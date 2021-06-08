import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const ServiceContext = React.createContext();

const ServiceProvider = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const state = {
    token,
  };

  return (
    <ServiceContext.Provider value={state}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
