import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { ServiceContext } from "./../../contexts/ServicePage";
import jwt from "jsonwebtoken";
import './programming.css';

export const Programing = ({ id }) => {
  const serviceContext = useContext(ServiceContext);
  const userId = useParams().userId;
  const [stat1, setStat1] = useState(0);

  async function rateFun(e) {
    serviceContext.add();
    let rating = Number(serviceContext.rating) + Number(e.target.value) * 2;
    let numberOfVoters = serviceContext.numberOfVoters + 1;
    await axios.put("http://localhost:5000/ratting", {
      id: userId,
      numberOfVoters: numberOfVoters,
      rating: rating,
    });
  }
  const [allComments, setAllComments] = useState("");
  let a;
  async function getCommints() {
    try {
      let token = localStorage.getItem("token");
      let token1 = jwt.decode(token);
      const commit = await axios.post("http://localhost:5000/getcomments", {
        comment: serviceContext.commit,
        commenter: token1.userId,
        serviceId: userId,
      });
      a = commit.data;
      console.log("aaaaaaa", a);

      await setAllComments(
        a.map((ele) => {
          return (
            <div>
              <p>{ele.commenter.image}</p>
              <p>{ele.commenter.firstName}</p>
              <p>{ele.comment}</p>
            </div>
          );
        })
      );
      console.log("allComments", allComments);
      console.log("codasdasmmit", commit.data);
    } catch (error) {}
  }

  async function commitFun() {
    setStat1(stat1 + 1);
    let token = localStorage.getItem("token");
    let token1 = jwt.decode(token);
    await axios.post(`http://localhost:5000/subService/${userId}/comment`, {
      comment: serviceContext.commit,
      commenter: token1.userId,
      serviceId: userId,
    });
    serviceContext.setCommit("");
  }

  function commit(e) {
    serviceContext.setCommit(e.target.value);
  }

  useEffect(() => {
    serviceContext.getService(userId);
    getCommints();
  }, []);

  useEffect(() => {
    getCommints();
  }, [stat1]);

  // async function fav() {
  //   let token = localStorage.getItem("token");
  //   let token1 = jwt.decode(token);
  //   console.log(token1);
  //   await axios.post(`http://localhost:5000/favorite`, {
  //     userId: token1.userId, //userId
  //     serviceId: userId, //serviceid
  //   });
  // }

  return (
    <>
      <div  className="AllPage">
        <div></div>
        <div className="midPageDiv">
        <div className="secondColumn">
          <div>
        <p className="styleTitleP">{serviceContext.title}</p>
        <p className="styleTypeP">Type: {serviceContext.type}</p>
        <input type="button" className="buttonR" onClick={rateFun} value="5"></input>
        <input type="button" className="buttonR" onClick={rateFun} value="4"></input>
        <input type="button" className="buttonR" onClick={rateFun} value="3"></input>
        <input type="button" className="buttonR" onClick={rateFun} value="2"></input>
        <input type="button" className="buttonR" onClick={rateFun} value="1"></input>
        <div className="rating">{`${Math.round(serviceContext.rate) / 2}`}/5</div>
        <div className="NumberRating"> Number of voters: <span>{serviceContext.numberOfVoters}</span> </div>

          </div>
          <div>
        <img src={serviceContext.image} className="imageP"></img>

          </div>
          </div>
          <div>
        <p className="descriptionP">{serviceContext.description}</p>
        </div>
        <div>

        <textarea rows="10" cols="60" placeholder="comment here" value={serviceContext.commit} onChange={commit}></textarea>
        {a}
        <br></br>
        <button className="buttonP" onClick={commitFun}>add Comment</button>
        {allComments}
          </div>
        {/* <button onClick={fav}>add favorite</button> */}
        </div>
        <div></div>
      </div>
    </>
  );
};
