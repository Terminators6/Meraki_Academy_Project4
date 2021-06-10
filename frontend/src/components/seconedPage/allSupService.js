import React, { useContext, useEffect, useState } from "react";
import { AllSupServiceContext } from "../../contexts/secondaPage/AllSupService";
import { useHistory } from "react-router-dom";
import "./style.css";

const AllSupService = () => {
  const history = useHistory();
  const allSupServiceContext = useContext(AllSupServiceContext);

  useEffect(() => {
    allSupServiceContext.getAllSupService();
  }, []);

  return (
    <div className="other">
      {allSupServiceContext.service &&
        allSupServiceContext.service.map((ele) => {
          return (
            <div className="All1">
              <div className="AllImage">
                <img
                  onClick={(e) => {
                    history.push(`${ele.type}/${ele._id}`);
                  }}
                  src={ele.image}
                ></img>
              </div>
              <div className="Des">
                <h2 className="color9" id="Avatarr">
                  {ele.title}
                </h2>
                <h2 id="type">{Math.round(ele.rating / ele.numberOfVoters)}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllSupService;
