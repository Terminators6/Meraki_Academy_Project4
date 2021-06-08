import React, { useContext, useEffect } from "react";
import { MarketingSupServiceContext } from "../../contexts/secondaPage/marketingSupService";

const MarketingSupService = () => {
  const MarketingSupServiceContext = useContext(MarketingSupServiceContext);

  const handleClick = () => {
    MarketingSupServiceContext.getMarketingSupService();

    MarketingSupServiceContext.setShow(!MarketingSupServiceContext.show);
  };

  return (
    <>
      <br />
      <button onClick={handleClick}>Get All MarketingSupService</button>
    </>
  );
};

export default MarketingSupService;
