import React, { useContext } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { ServiceContext } from "./../../contexts/ServicePage";

export const Programing = ({ id }) => {
  const serviceContext = useContext(ServiceContext);
  const userId = useParams().userId;
  serviceContext.getService(userId);

  function rateFun() {
    console.log("aa");
  }
  return (
    <>
      <div className="Programing">
        <img src={serviceContext.image}></img>
        <h1>{serviceContext.title}</h1>
        <p>Type:{serviceContext.type}</p>
        <p>{serviceContext.description}</p>
        <input type="radio" onClick={rateFun}></input> rate here
        <div>`{serviceContext.rating}/10`</div>
        <div>{serviceContext.numberOfVoters}</div>
      </div>
    </>
  );
};
