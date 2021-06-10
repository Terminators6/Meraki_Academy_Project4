import React from "react";
import { Video } from "./../video/video";
import { Footer } from "./../footer/index";
import { Main } from "./../main/index";
import { useHistory } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const history = useHistory();
  return (
    <div>
      <Video />
      <div className="videoText">
        <p className="sizaText">
          Hire the best <br /> freelancers for any job,
          <br /> online.
        </p>
        <p className="paragraph">
          Millions of people use freelancer.com to turn their ideas into reality
        </p>
        <button
          className="buttonPageOne"
          onClick={(e) => {
            history.push("./aboutUs");
          }}
        >
          About Us
        </button>
        <button
          className="buttonPagetWO"
          onClick={(e) => {
            history.push("./Login");
          }}
        >
          Login
        </button>
      </div>
      <Main />
      <Footer />
    </div>
  );
};
