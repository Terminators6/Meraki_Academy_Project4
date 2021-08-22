import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navigation.css";

import { LoginContext } from "./../../contexts/login";
import { ProfileContext } from "../../contexts/profile";

export const Navigation = () => {
  const [state, setState] = useState(false);
  const loginContext = useContext(LoginContext);
  const profileContext = useContext(ProfileContext);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  console.log("loginContext.loggedIn is ....", loginContext.loggedIn);
  console.log("profileContext.loggedIn is ....", profileContext.loggedIn);

  useEffect(() => {
    setState(true);
    // console.log("1....Profile useEffect", profileContext.user);
  }, [loginContext.loggedIn]);

  return (
    <div className="Navbar">
      {loginContext.loggedIn ? (
        <div className="Nav">
          <Link to="/" className=" logoText">
            {" "}
            Freelance
          </Link>
          <Link to="/Favorite" className="styleText">
            {" "}
            Favorite{" "}
          </Link>
          <Link to="/Profile" className="styleText">
            {" "}
            Profile{" "}
          </Link>
          <Link to="/logout" className="styleText styleLogOut">
            {" "}
            Log Out{" "}
          </Link>
        </div>
      ) : (
        <div className="Nav">
          <Link to="/" className=" logoText">
            {" "}
            Freelance
          </Link>

          <Link to="/Register" className="styleText">
            {" "}
            Register{" "}
          </Link>
          <Link to="/Login" className="styleText">
            {" "}
            Login{" "}
          </Link>
        </div>
      )}
    </div>
  );
};
