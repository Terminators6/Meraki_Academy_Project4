import React from "react";
import './main.css';
import { useHistory } from "react-router-dom";

export const Main = () => {
  const history = useHistory();

  const image = [
    { url: "https://rb.gy/woeg7k", path: "/business" },
    { url: "https://rb.gy/vebaim", path: "/programming" },
    { url: "https://rb.gy/rrlv5u", path: "/finance" },
    { url: "https://rb.gy/cgtybc", path: "/courses" },
    { url: "https://rb.gy/vouswy", path: "/marketing" },
    { url: "https://rb.gy/isbbpw", path: "/allServices" },
  ];
  const nameImage = ["Business", "Programming", "Finance", "Courses", "Marketing", "All services"];
  const newImage = image.map((srcImage, i) => {
    return <img key={i} src={srcImage.url} className="sizeImage" />;
  });

  const imageAll = newImage.map((imagei, i) => {
    return (
      <div
        onClick={(e) => {
          history.push(image[i].path);
        }}
      >
        <div key={i} className="Div">
          {imagei}
          <div className="overlay">
            <div className="text"> {nameImage[i]} </div>
          </div>
        </div>
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
