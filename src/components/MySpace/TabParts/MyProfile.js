import React from "react";

import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyIntro } from "..";
import {Icon, Profile, Button} from "../../../elements"
import { Tabs, MiniTabs } from "../../../NavComponents";
import MyArtWork from "./MyArtWork";
import { ArtWorkAllList } from "../../ArtWorks";


// 한번에 다 보여주기
const MyPage = (props) => {

  let history = useHistory();


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