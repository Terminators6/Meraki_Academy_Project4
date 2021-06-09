import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "./../contexts/login";

export const Logout = () => {
  const history = useHistory();
  const loginContext = useContext(LoginContext);

  loginContext.logout();
  return (
    <div>
      Logout successfully
      {setTimeout(() => {
        history.push("/");
      }, 2000)}
    </div>
  );
};
