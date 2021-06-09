import React, { useContext, useEffect } from "react";
import { CoursesSupServiceContext } from "../../contexts/secondaPage/coursesSupService";

const CoursesSupService = () => {
  const CoursesSupServiceContext = useContext(CoursesSupServiceContext);

  const handleClick = () => {
    CoursesSupServiceContext.getCoursesSupService();

    CoursesSupServiceContext.setShow(!CoursesSupServiceContext.show);
  };

  return (
    <>
      <br />
      <button onClick={handleClick}>Get All CoursesSupService</button>
    </>
  );
};

export default CoursesSupService;
