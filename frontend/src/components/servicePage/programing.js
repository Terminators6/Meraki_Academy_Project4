import React, { useContext } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { ServiceContext } from "./../../contexts/ServicePage";

export const Programing = ({ id }) => {
  const serviceContext = useContext(ServiceContext);
  const userId = useParams().userId;
  serviceContext.getService(userId);
  return (
    <>
      <div className="Programing">
        <h1>{serviceContext.title}</h1>
        <img src={serviceContext.image}></img>
        <h1>{serviceContext.description}</h1>
        <h1>{serviceContext.type}</h1>
        <h1>{serviceContext.rating}</h1>
        <h1>{serviceContext.numberOfVoters}</h1>
        <h1>{serviceContext.title}</h1>
      </div>
    </>
  );
};
