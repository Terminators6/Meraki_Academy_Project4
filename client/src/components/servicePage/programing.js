import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { ServiceContext } from "./../../contexts/ServicePage";
import jwt from "jsonwebtoken";
import "./programming.css";

export const Programing = ({ id }) => {
  const serviceContext = useContext(ServiceContext);
  const userId = useParams().userId;
  const [stat1, setStat1] = useState(0);
  async function rateFun(e) {
    serviceContext.add();
    let rating = Number(serviceContext.rating) + Number(e.target.value) * 2;
    let numberOfVoters = serviceContext.numberOfVoters + 1;
    await axios.put("/ratting", {
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
      const commit = await axios.post("/getcomments", {
        comment: serviceContext.commit,
        commenter: token1.userId,
        serviceId: userId,
      });
      a = commit.data;
      await setAllComments(
        a.map((ele) => {
          return (
            <div className="divColumnComment">
              <div>
                <img src="https://cutt.ly/qnUMxQg" className="imageProgrammingTwo" />
              </div>
              <div>
                <div className="firstNameCommentP">{ele.commenter.firstName}</div>
                <p className="commentDivProgramming">{ele.comment}</p>
              </div>
            </div>
          );
        })
      );
    } catch (error) {}
  }
  async function commitFun() {
    setStat1(stat1 + 1);
    let token = localStorage.getItem("token");
    let token1 = jwt.decode(token);
    await axios.post(`/subService/${userId}/comment`, {
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
  //   await axios.post(`/favorite`, {
  //     userId: token1.userId, //userId
  //     serviceId: userId, //serviceid
  //   });
  // }
  return (
    <>
      <div>
        <div className="AllPage">
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
                <div className="NumberRating">
                  {" "}
                  Number of voters: <span>{serviceContext.numberOfVoters}</span>{" "}
                </div>
              </div>
              <div>
                <img src={serviceContext.image} className="imageP" alt=""></img>
              </div>
            </div>
            <div>
              <p className="descriptionP">{serviceContext.description}</p>
            </div>
            <div className="commentProgramming">
              <div className="inputTextareaComment">
                <img src="https://cutt.ly/qnUMxQg" className="imageProgramming" alt="" />
                <div className="textareaComment">
                  <textarea
                    rows="3"
                    cols="60"
                    placeholder="comment here"
                    value={serviceContext.commit}
                    onChange={commit}
                  ></textarea>
                  {a}
                  <br></br>
                </div>
                <div className="textareaCommentTwo">
                  <button className="buttonP" onClick={commitFun}>
                    add Comment
                  </button>
                </div>
              </div>
              {allComments}
            </div>
            {/* <button onClick={fav}>add favorite</button> */}
          </div>
          <div></div>
        </div>
      </div>
      <div className="margineDiv"></div>
    </>
  );
};
