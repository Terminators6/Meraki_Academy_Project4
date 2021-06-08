import React, { useState } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const ServiceContext = React.createContext();

const ServiceProvider = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [numberOfVoters, setNumberOfVoters] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState(false);

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
  };

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
    } catch (error) {}
  }

  return (
    <ServiceContext.Provider value={state}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
