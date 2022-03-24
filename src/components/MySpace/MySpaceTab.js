import React from "react";

import { useHistory,  Link, useLocation } from "react-router-dom";
import { useToggle } from "../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyPageCategory, MyProfile} from "../MySpace";
import {MyArtWork, MyPic, MyPosts, MyQNA} from "../MySpace";




const MyPage = (props) => {

  let history = useHistory();
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]

console.log(b)
  if(b === "myprofile") return(<MyProfile />)
  if(b === "mywork")return (<MyArtWork />);
  if(b === "mypic")return (<MyPic />);
  if(b === "share")return (<MyPosts />);
  if(b === "qna")return (<MyQNA />);

  else {
      return null
  }

};

export default MyPage;