import React from "react";

import { useHistory,  Link, useLocation } from "react-router-dom";
import { useToggle } from "../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyPageCategory, MyProfile} from "../MySpace";




const MyPage = (props) => {

  let history = useHistory();
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]

console.log(b)

  if(b === "mywork")return (<MySkill />);
  if(b === "mypic")return (<MySkill />);
  if(b === "share")return (<MySkill />);
  if(b === "qna")return (<MySkill />);
  if(b === "mywork")return (<MySkill />);

  else {
      return null
  }

};

export default MyPage;