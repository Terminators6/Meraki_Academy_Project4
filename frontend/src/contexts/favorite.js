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
    token,
    favorite,
  };

  function favorite() {
    //   const user = jwt.decode(localStorage.getItem("token"));
    //   const id = user.userId;
    //   console.log(id);
    //   const fav = await axios.get(
    //     `http://localhost:5000//favorite/60be4823baff51518ce73918`
    //   );
    //   let arrayOfFav = fav.favorite;
    //   let Fav = arrayOfFav.map(async (ele, i) => {
    //     return await supServiceModule.findOne(
    //       { _id: ele },
    //       "title type rating image"
    //     );
    //   });
  }

  return (
    <FavoriteContext.Provider value={state}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
