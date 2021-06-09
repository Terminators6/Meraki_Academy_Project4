import React from "react";
import "./main.css";

export const Main = () => {
  const image = [
    "https://rb.gy/woeg7k",
    "https://rb.gy/vebaim",
    "https://rb.gy/jthqo0",
    "https://rb.gy/cgtybc",
    "https://rb.gy/vouswy",
    "https://rb.gy/yec2im",
  ];

  const nameImage = [
    "Business",
    "Programming",
    "Finance",
    "Courses",
    "Marketing",
    "All services",
  ];
  const newImage = image.map((srcImage, i) => {
    return <img key={i} src={srcImage} className="sizeImage" />;
  });

  const imageAll = newImage.map((image, i) => {
    return (
      <div className="Div" key={i}>
        {" "}
        {image}{" "}
        <div className="overlay">
          {" "}
          <div className="text"> {nameImage[i]} </div>{" "}
        </div>{" "}
      </div>
    );
  });

  return (
    <>
      <div className="main">
        <div></div>
        <div className="allDiv">{imageAll}</div>
        <div></div>
      </div>
    </>
  );
};
