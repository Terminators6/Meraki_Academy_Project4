import React, { useContext, useEffect } from "react";
import { FinanceSupServiceContext } from "../../contexts/secondaPage/financeSupService";

const FinanceSupService = () => {
  const FinanceSupServiceContext = useContext(FinanceSupServiceContext);

  const handleClick = () => {
    FinanceSupServiceContext.getFinanceSupService();

    FinanceSupServiceContext.setShow(!FinanceSupServiceContext.show);
  };

  return (
    <>
      <br />
      <button onClick={handleClick}>Get All FinanceSupService</button>
    </>
  );
};

export default FinanceSupService;
