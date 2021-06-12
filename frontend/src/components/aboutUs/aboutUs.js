import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { LoginContext } from "./../../../contexts/login";
import "./style.css";
const aboutUs = () => {
  return (
    <>
      <div class="about-section">
        <h1>Terminators Team</h1>
        <p>we are programers and we have No life</p>
        <p>
          A programming team is a team of people who develop or maintain computer software. ... They may be organised in
          numerous ways, but the egoless programming ...
        </p>
      </div>
      <h2 style={{ "text-align": "center" }}>Terminators Team</h2>
      <div className="aboutUs">
        <div class="row1">
          <div class="column1">
            <div class="card1">
              <img
                src="https://f.top4top.io/p_19898rk101.jpeg"
                alt="Jane"
                style={{ height: "200px", width: "100%" }}
              ></img>
              <div class="container1">
                <h2>Mohammad Alnabale</h2>
                <p class="title">CEO & Founder</p>
                <p>i have an ambition to become the best programmer in the world </p>
                <p>abedalnabi96@gmail.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row1">
          <div class="column1">
            <div class="card1">
              <img
                src="https://i.ibb.co/jLbL5k1/C18-Maisaa.jpg"
                alt="Jane"
                style={{ height: "200px", width: "100%" }}
              ></img>
              <div class="container1">
                <h2>Maisaa Hamed Alkhder</h2>

                <p class="title">Tormenters</p>
                <p>i have an ambition to become the best programmer in the world</p>
                <p>jane@example.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row1">
          <div class="column1">
            <div class="card1">
              <img src="https://i.ibb.co/BKWb0Tr/bayan.jpg" alt="Jane" style={{ height: "200px", width: "100%" }}></img>
              <div class="container1">
                <h2>Bayan Tormenters Team </h2>

                <p class="title">Tormenters</p>
                <p>i have an ambition to become the best programmer in the world</p>
                <p>jane@example.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row1">
          <div class="column1">
            <div class="card1">
              <img
                src="https://www.w3schools.com/w3images/team2.jpg"
                alt="Jane"
                style={{ height: "200px", width: "100%" }}
              ></img>
              <div class="container1">
                <h2>Ibrahem Tormenters</h2>
                <p class="title">Tormenters</p>
                <p>i have an ambition to become the best programmer in the world</p>
                <p>jane@example.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
