import React from "react";

import { useHistory, Link, useLocation } from "react-router-dom";
import { useToggle } from "../../hooks";
import {
  MySpaceUser,
  MyExp,
  MyPortfolio,
  MySkill,
  MyTimeLine,
  MyPageCategory,
  MyProfile,
} from "../MySpace";
import { MyArtWork, MyPic, MyPosts, MyQNA } from "../MySpace";

const MySpaceTab = (props) => {
  const {info, exp, feed, profile } = props
  const location = useLocation();
  const a = location.pathname;
  const b = a.split("/")[2];

  if (b === "myprofile") return <MyProfile info={info} exp={exp} feed={feed} />;
  if (b === "mywork") return <MyArtWork info={info?.account_id} />;
  if (b === "mypic") return <MyPic info={info} />;
  if (b === "share") return <MyPosts info={info} profile={profile}/>;
  if (b === "qna") return <MyQNA profile={profile}/>;
  else {
    return null;
  }
};

export default MySpaceTab;
