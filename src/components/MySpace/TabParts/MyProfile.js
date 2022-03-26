import React from "react";
import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyIntro } from "..";



// 한번에 다 보여주기
const MyPage = (props) => {

  return (
<>


<MyIntro />
<MyExp />
<MyPortfolio />
<MySkill />
<MyTimeLine />



</>


  );
};

export default MyPage;