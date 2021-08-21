import React from "react";
import { useHistory } from "react-router-dom";
import './main.css';

export const Main = () => {
  const history = useHistory();

  const image = [
    { url: "https://cutt.ly/VnPtiJ1", path: "/business" },
    { url: "https://cutt.ly/tnPtqUP", path: "/programming" },
    { url: "https://cutt.ly/WnPtGpa", path: "/finance" },
    { url: "https://rb.gy/pnfcrn", path: "/courses" },
    { url: "http://edonus.com.br/wp-content/uploads/2020/10/Doutores-da-web-a-importa%CC%82ncia-do-marketing-digital-em-um-novo-nego%CC%81cio.png", path: "/marketing" },
    { url: "https://cutt.ly/2nPvWQr", path: "/allServices" },
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
        <div className="allDiv">{imageAll}</div>
        <div></div>
    </>
  );
};
