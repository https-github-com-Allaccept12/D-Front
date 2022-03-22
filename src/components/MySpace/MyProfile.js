import React from "react";

import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../../hooks";
import { MySpaceUser, MyExp, MyPortfolio, MySkill, MyTimeLine, MyIntro } from "../MySpace";
import {Icon, Profile, Button} from "../../elements"
import { Tabs, MiniTabs } from "../../NavComponents";
import MyArtWork from "./MyArtWork";
import { ArtWorkAllList } from "../ArtWorks";



const MyPage = (props) => {

  let history = useHistory();


  return (
<>
    <div className=" bg-blue-400 h-52 w-[78.75rem]"> 여기에 배경이미지

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
        

<MyIntro />
<MySkill />
<MyExp />
<MyArtWork />




        
        </div>


 
    </div>


</>


  );
};

export default MyPage;