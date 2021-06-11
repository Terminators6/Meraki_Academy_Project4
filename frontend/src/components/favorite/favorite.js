import React, { useContext, useEffect } from "react";
import { FavoriteContext } from "./../../contexts/favorite";
import { Footer } from "./../footer/index";

const Favorite = () => {
  const favoriteContext = useContext(FavoriteContext);

  useEffect(() => {
    favoriteContext.favorite();
  }, []);

  return (
    <>
    <div className="favorite">
      {favoriteContext.fav &&
        favoriteContext.fav.map((ele, i) => {
          return <p>{ele.name}</p>;
        })}
    </div>
    <Footer />
    </>
  );
};

export default Favorite;
