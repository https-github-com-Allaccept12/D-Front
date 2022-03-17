import React from "react";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine } from ".."

import { useHistory } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
    <>
     <MySpaceUser />
      <MyExp />
      <MyPortfolio />
      <MySkill />
      <MyTimeLine />
      
    </>
  );
};

export default NotFound;