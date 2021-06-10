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
      <div className="other">
        {allSupServiceContext.service &&
          allSupServiceContext.service.map((ele) => {
            return (
              <div className="All1">
                <div className="IMG">
                  <img
                    className="All1Image"
                    onClick={(e) => {
                      history.push(`${ele.type}/${ele._id}`);
                    }}
                    src={ele.image}
                  ></img>
                </div>
                <div className="Des">
                  <h2 className="color9">{`   ${ele.title}`}</h2>
                  <h2 id="type">{`Rating:    ${Math.round(ele.rating / ele.numberOfVoters) / 2}`}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BusinessSupService;
