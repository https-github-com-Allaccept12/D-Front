import React from "react";

import { useHistory,  Link, useLocation } from "react-router-dom";
import { useToggle } from "../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyPageCategory, MyProfile, MySpaceTab } from "../MySpace";
import { Tabs, MiniTabs } from "../../NavComponents";
import MyArtWork from "./MyArtWork";
import { ArtWorkAllList } from "../ArtWorks";
import Dpolio from "./Dpolio";



const MyPage = (props) => {

  let history = useHistory();
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]

  return (
<>


    <div className='grid grid-cols-5'>
        <div className='md:ml-28 mt-4 w-40 h-[112.5rem] '>
        <MyPageCategory /> 
        </div>
        {/* 내정보일땐 마이프로필 다른사람정보일땐 디폴리오 각 메뉴를 클릭하면 메뉴 */}
    <div className="col-start-2 col-end-6">
        {/* <Dpolio /> */}
{
  b ? <MySpaceTab /> : <MyProfile/> 
}


 
        </div>
        </div>
</>


  );
};

export default MyPage;