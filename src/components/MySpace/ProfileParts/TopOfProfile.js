import React from "react";
import { useSelector } from "react-redux";

import { MySpaceTab } from "../../../components/MySpace";
import { Profile, Button, Icon, Title, Subtitle } from "../../../elements";
import adventure from "../../../static/images/MyPageImages/adventure.svg"
import artist from "../../../static/images/MyPageImages/artist.svg"
import detail from "../../../static/images/MyPageImages/detail.svg"
import harmonious from "../../../static/images/MyPageImages/harmonious.svg"
import innovator from "../../../static/images/MyPageImages/innovator.svg"
import inventor from "../../../static/images/MyPageImages/inventor.svg"
import back_inventor from "../../../static/images/MyPageImages/back_inventor.svg"
import back_adventure from "../../../static/images/MyPageImages/back_adventure.svg"
import back_artist from "../../../static/images/MyPageImages/back_artist.svg"
import back_detail from "../../../static/images/MyPageImages/back_detail.svg"
import back_harmonious from "../../../static/images/MyPageImages/back_harmonious.svg"
import back_innovator from "../../../static/images/MyPageImages/back_innovator.svg"

 
const TopOfProfile = (props) => {
    const {info} = props
    console.log(info);
    let nickname = "";
    let following = "";
    let follower = "";
    let tendency = "";
    let profile = "";
    let job = "";
    if (info) {
        nickname = info.nickname;
        following = info.following_count;
        follower = info.follower_count;
        tendency = info.tendency;
        profile = info.profile_img;
        job = info.job;

    }
    
    return (
        <div className="col-start-2 col-end-6">
            <div className="w-full">
            {tendency == "창의적인 발명가" && <div className="grid items-center justify-items-center relative bg-[#E9EDFF] h-[22.5rem] w-full">
            <img src={back_inventor}/></div>}
            {tendency == "명랑한 모험가" && <div className="grid items-center justify-items-center relative bg-[#FFF7E1] h-[22.5rem] w-full">
            <img src={back_adventure}/></div>}
            {tendency == "꿈꾸는 예술가" && <div className="grid items-center justify-items-center relative bg-[#EDDFFF] h-[22.5rem] w-full">
            <img src={back_artist}/></div>}
            {tendency == "디테일 장인" && <div className="grid items-center justify-items-center relative bg-[#FEEEE8] h-[22.5rem] w-full">
            <img src={back_detail}/></div>}
            {tendency == "부드러운 중재자" && <div className="grid items-center justify-items-center relative bg-[#DCF0EC] h-[22.5rem] w-full">
            <img src={back_harmonious}/></div>}
            {tendency == "대담한 혁신가" && <div className="grid items-center justify-items-center relative bg-[#FEEAED] h-[22.5rem] w-full">
            <img src={back_innovator}/></div>}
            <div className="relative items-center justify-items-center -top-24">
    
                <div className="flex flex-col items-center">
                <Profile size="1" src={profile}/>
                <div className="ml-2">
                    <div className="grid p-1 rounded-lg justify-items-center">
                    <Title size="2">{nickname}</Title>
                    <div className="mt-2 mb-4">
                    {tendency == "명랑한 모험가" && <img src={adventure}/>}
                    {tendency == "꿈꾸는 예술가" && <img src={artist}/>}
                    {tendency == "디테일 장인" && <img src={detail}/>}
                    {tendency == "부드러운 중재자" && <img src={harmonious}/>}
                    {tendency == "대담한 혁신가" && <img src={innovator}/>}
                    {tendency == "창의적인 발명가" && <img src={inventor}/>}
                    </div>
                    <Subtitle size="1">{job} Designer</Subtitle>
                    <div className="my-4">팔로잉 {following} ㅣ 팔로워 {follower}</div>
    
                    <div className="flex flex-row p-1 text-2xl">
                        <Icon name="Time" iconSize="32" />
                        <Icon name="Talk" iconSize="32" />
                        <Icon name="Link" iconSize="32" />
                        <Icon name="Edit" iconSize="32" />
                    </div>
                    </div>
                </div>
                </div>
    
                <MySpaceTab info={info} />
            </div>
            </div>
        </div>
    )
    
}

export default TopOfProfile;
