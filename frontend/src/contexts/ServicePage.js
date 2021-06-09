import React, { useState } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const ServiceContext = React.createContext();

const ServiceProvider = (props) => {
  const history = useHistory();
  const [rate, setRate] = useState(0);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [numberOfVoters, setNumberOfVoters] = useState(0);
  const [image, setImage] = useState("");
  const [token, setToken] = useState(false);
  const [first, setFirst] = useState("");
  const [commit, setCommit] = useState("");
  const [reload, setReload] = useState();

  const state = {
    token,
    getService,
    name,
    title,
    description,
    type,
    rating,
    numberOfVoters,
    image,
    setNumberOfVoters,
    rate,
    add,
    setCommit,
    commit,
    getToken,
    setReload,
    reload,
    first,
  };

  function getToken(token) {
    const user = jwt.decode(token);
    if (user) {
      setToken(token);
      // setUserId(user.userId);
      localStorage.setItem("token", token);
    }
  }

  async function getService(params) {
    try {
      const service = await axios.post(
        `http://localhost:5000/programming/${params}`
      );
      setName(service.data.name);
      setTitle(service.data.title);
      setDescription(service.data.description);
      setType(service.data.type);
      setRating(service.data.rating);
      setNumberOfVoters(service.data.numberOfVoters);
      setImage(service.data.image);
      setRate(service.data.rating / service.data.numberOfVoters);
      await setFirst(service.data.comments);
    } catch (error) {}
  }

  async function add() {
    setNumberOfVoters(numberOfVoters + 1);
  }
  return (
    <ServiceContext.Provider value={state}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
