import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const FavoriteContext = React.createContext();

const FavoriteProvider = (props) => {
  const history = useHistory();
  const [fav, setFav] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const state = {
    token,
    favorite,
    fav,
  };

  async function favorite() {
    const user = jwt.decode(localStorage.getItem("token"));
    const id = user.userId;
    const fava = await axios.post(`http://localhost:5000/favorite`, {
      userId: id,
    });
    console.log("fava", fava);
    setFav(fava.data);
    console.log("fav", fav);
    // let Fav = arrayOfFav.map(async (ele, i) => {
    //   return await supServiceModule.findOne({ _id: ele }, "title type rating image");
    // });
  }

  return <FavoriteContext.Provider value={state}>{props.children}</FavoriteContext.Provider>;
};

export default FavoriteProvider;
