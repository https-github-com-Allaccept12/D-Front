import React from "react";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine } from "../MySpace"

import { useHistory } from "react-router-dom";


const Dpolio = (props) => {
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

export default Dpolio;