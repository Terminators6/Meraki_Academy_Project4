import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { ServiceContext } from "./../../contexts/ServicePage";
import jwt from "jsonwebtoken";

export const Programing = ({ id }) => {
  const serviceContext = useContext(ServiceContext);
  const userId = useParams().userId;
  console.log("userId", userId);
  serviceContext.getService(userId);

  let NOV;
  async function rateFun(e) {
    serviceContext.add();
    let rating = Number(serviceContext.rating) + Number(e.target.value);
    let numberOfVoters = serviceContext.numberOfVoters + 1;
    await axios.put("http://localhost:5000/ratting", {
      id: userId,
      numberOfVoters: numberOfVoters,
      rating: rating,
    });
  }

  async function commitFun() {
    let token = localStorage.getItem("token");
    let token1 = jwt.decode(token);
    console.log(token1.userId);
    await axios.post(`http://localhost:5000/subService/${userId}/comment`, {
      comment: serviceContext.commit,
      commenter: token1.userId,
    });
  }

  function commit(e) {
    serviceContext.setCommit(e.target.value);
  }
  useEffect(() => {
    console.log("object");
  }, [commitFun]);

  return (
    <>
      <div className="Programing">
        <img src={serviceContext.image}></img>
        <h1>{serviceContext.title}</h1>
        <p>Type:{serviceContext.type}</p>
        <p>{serviceContext.description}</p>
        <input type="button" onClick={rateFun} value="10"></input>
        <input type="button" onClick={rateFun} value="9"></input>
        <input type="button" onClick={rateFun} value="8"></input>
        <input type="button" onClick={rateFun} value="7"></input>
        <input type="button" onClick={rateFun} value="6"></input>
        <input type="button" onClick={rateFun} value="5"></input>
        <input type="button" onClick={rateFun} value="4"></input>
        <input type="button" onClick={rateFun} value="3"></input>
        <input type="button" onClick={rateFun} value="2"></input>
        <input type="button" onClick={rateFun} value="1"></input>
        <div>{`${Math.round(serviceContext.rate)}`}/10</div>
        <div>{serviceContext.numberOfVoters}</div>
        <input placeholder="comment here" onChange={commit}></input>
        <br></br>
        <button onClick={commitFun}>add Comment</button>
      </div>
    </>
  );
};
