import React, { useContext, useEffect } from "react";
import { BusinessSupServiceContext } from "./../../contexts/secondaPage/BusinessSupService";
import { useHistory, useParams } from "react-router-dom";

import { AllSupServiceContext } from "../../contexts/secondaPage/AllSupService";

const BusinessSupService = ({ id }) => {
  const allSupServiceContext = useContext(AllSupServiceContext);

  const typeService = useParams().type;
  console.log("type", typeService);
  const history = useHistory();

  useEffect(() => {
    allSupServiceContext.getAnyType(typeService);
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
                <p>{` Title :     ${ele.title}`}</p>
                <p>{`Rating:    ${Math.round(
                  ele.rating / ele.numberOfVoters
                )}`}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BusinessSupService;
