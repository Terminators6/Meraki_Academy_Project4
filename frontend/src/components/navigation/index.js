import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navigation.css";

import { LoginContext } from "./../../contexts/login";

export const Navigation = () => {
  const [state, setState] = useState("");
  const loginContext = useContext(LoginContext);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div className="Nav">
          <img className="NavIm" src="https://rb.gy/xkgfkm" />
          <Link to="/"> Terminators </Link>
          <Link to="/Favorite"> Favorite </Link>
          <Link to="/Profile"> Profile </Link>
          <Link to="/logout"> Loge Out </Link>
        </div>
      ) : (
        <div className="Nav">
          <img className="NavIm" src="https://rb.gy/xkgfkm" />
          <Link to="/"> Terminators </Link>
          <Link to="/Register"> Register </Link>
          <Link to="/Login"> Login </Link>
        </div>
      )}
    </div>
  );
};
