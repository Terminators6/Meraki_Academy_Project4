import React, { useContext, useEffect, useState } from "react";
import { AllSupServiceContext } from "../../contexts/secondaPage/AllSupService";
import { useHistory } from "react-router-dom";

const AllSupService = () => {
  const history = useHistory();
  const allSupServiceContext = useContext(AllSupServiceContext);

  useEffect(() => {
    allSupServiceContext.getAllSupService();
  }, []);

  return (
    <>
      <div className="allServices">
        {allSupServiceContext.service &&
          allSupServiceContext.service.map((ele) => {
            return (
              <div>
                <img
                  onClick={(e) => {
                    history.push(`${ele.type}/${ele._id}`);
                  }}
                  src={ele.image}
                ></img>
                <p>{ele.title}</p>
                <p>{Math.round(ele.rating / ele.numberOfVoters)}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllSupService;
