import React, { useState } from "react";
import axios from "axios";

export const AllSupServiceContext = React.createContext();

const AllSupServiceProvider = (props) => {
  const [service, setService] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const state = {
    show,
    setShow,
    service,
    setImg,
    img,
    title,
    setTitle,
    setDescription,
    getAllSupService,
    getAnyType,
  };

  async function getAllSupService() {
    try {
      const res = await axios.get("/allServices");
      console.log("all", res.data);
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAnyType(typeService) {
    console.log("typ", typeService);
    try {
      const res = await axios.get(`/sup/${typeService}`);
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return <AllSupServiceContext.Provider value={state}>{props.children}</AllSupServiceContext.Provider>;
};

export default AllSupServiceProvider;
