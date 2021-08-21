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
      <div className="aboutUs11">
        {allSupServiceContext.service &&
          allSupServiceContext.service.map((ele) => {
            return (
              <div className="row11">
                <div className="column11">
                  <div class="card11">
                    <img
                      className="All1Image"
                      onClick={(e) => {
                        history.push(`${ele.type}/${ele._id}`);
                      }}
                      src={ele.image}
                      style={{ height: "60%", width: "100%" }}
                      alt=""
                    ></img>
                    <div class="container11">
                      <h2>{`${ele.title}`}</h2>
                      <p className="type11">{`Type : ${ele.type}`}</p>
                      <p className="type1">{`Rating:    ${Math.round(ele.rating / ele.numberOfVoters) / 2}/5`}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BusinessSupService;
