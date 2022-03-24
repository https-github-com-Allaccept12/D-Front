import React from "react";

import { useHistory,  Link, useLocation } from "react-router-dom";
import { MyPageCategory, MyProfile, MySpaceTab } from "../components/MySpace";

import {Profile, Button, Icon} from "../elements"


const MyPage = (props) => {

  let history = useHistory();
  const location = useLocation();
const a = location.pathname
const b = a.split("/")[2]

  return (
<>


    <div className='grid grid-cols-5'>
        <div className='md:ml-28 mt-4 w-40 h-full '>
        <MyPageCategory /> 
        </div>
        {/* 내정보일땐 마이프로필 다른사람정보일땐 디폴리오 각 메뉴를 클릭하면 메뉴 */}
    <div className="col-start-2 col-end-6">

    <div className=" bg-blue-400 h-52 w-[80.625rem]"> 여기에 배경이미지

<div className="justify-items-center items-center">
        <div className="flex justify-end">팔로잉 팔로워</div>
        
        <div className="flex flex-col items-center mt-20">
        <Profile size="1" />
            <div className="ml-2">
                
                <div className="grid justify-items-center rounded-lg p-1">
                <h3 className="text-xl font-minB text-gray-800 font-medium">펭귄 님</h3>
                <span className="text-gray-600 text-sm font-minB">UX/UI Designer</span>
                <Button size="3"><span className="text-xs font-min-2"> INTP </span></Button>

            <div className="text-2xl p-1 flex flex-row">
            <Icon name="Time" iconSize="32" />
            <Icon name="Talk" iconSize="32" />
            <Icon name="Link" iconSize="32" />
            <Icon name="Edit" iconSize="32" />
            </div>

                </div>
            </div>
        </div>


        <MySpaceTab />

        </div>
        </div>

        </div>
        </div>

        
</>


  );
};

export default MyPage;