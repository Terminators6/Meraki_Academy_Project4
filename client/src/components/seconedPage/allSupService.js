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
    <div className="aboutUs11">
      {allSupServiceContext.service &&
        allSupServiceContext.service.map((ele) => {
          return (
            <div class="row11">
              <div class="column11">
                <div class="card11">
                  <img
                    onClick={(e) => {
                      history.push(`${ele.type}/${ele._id}`);
                    }}
                    src={ele.image}
                    alt="Jane"
                    style={{ height: "60%", width: "100%" }}
                  ></img>
                  <div class="container11">
                    <h2>{ele.title}</h2>
                    <p className="type11">{`Type : ${ele.type}`}</p>
                    <p className="type1">{`Rating:   ${Math.round(ele.rating / ele.numberOfVoters)}/5`}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllSupService;
