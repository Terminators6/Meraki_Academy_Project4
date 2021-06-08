import React, { useContext } from "react";
import { FavoriteContext } from "./../../contexts/favorite";

const Favorite = () => {
  const favoriteContext = useContext(FavoriteContext);

  return (
    <div className="favorite">
      {/* {favoriteContext.favorite()} */}
      Fav component
    </div>
  );
};

export default Favorite;
