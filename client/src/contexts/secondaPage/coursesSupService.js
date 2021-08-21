import React, { useState } from "react";
import axios from "axios";

export const CoursesSupServiceContext = React.createContext();

const CoursesSupServiceProvider = (props) => {
  const [service, setService] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const state = {
    show,
    service,
    setImg,
    setTitle,
    setDescription,
    getCoursesSupService,
  };

  async function getCoursesSupService() {
    try {
      const res = await axios.get("/sup/courses");
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return <CoursesSupServiceContext.Provider value={state}>{props.children}</CoursesSupServiceContext.Provider>;
};

export default CoursesSupServiceProvider;
