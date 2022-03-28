import React from "react";
import { useSelector } from "react-redux";

import { MySpaceTab } from "../../../components/MySpace";
import { Profile, Button, Icon } from "../../../elements";

 
const TopOfProfile = (props) => {
    const information = useSelector(state => state.myPage.myPage);
    const nickname = information.nickname;
    const following = information.following_count;
    const follower = information.follower_count;
    const tendency = information.tendency;
    const profile = information.profile_img;
    const job = information.job;
    console.log(information);
    return (
        <div className="col-start-2 col-end-6">
            <div className=" bg-blue-400 h-52 w-[80.625rem]">
            {" "}
            여기에 배경이미지
            <div className="items-center justify-items-center">
                <div className="flex justify-end">팔로잉{following} 팔로워{follower}</div>
    
                <div className="flex flex-col items-center mt-20">
                <Profile size="1" src={profile}/>
                <div className="ml-2">
                    <div className="grid p-1 rounded-lg justify-items-center">
                    <h3 className="text-xl font-medium text-gray-800 font-minB">
                        {nickname} 님
                    </h3>
                    <span className="text-sm text-gray-600 font-minB">
                        {job} Designer
                    </span>
                    <Button size="3">
                        <span className="text-xs font-min-2"> {tendency} </span>
                    </Button>
    
                    <div className="flex flex-row p-1 text-2xl">
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
    )
    
}

export default TopOfProfile;
