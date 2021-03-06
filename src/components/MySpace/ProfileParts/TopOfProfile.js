import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { myPageLoad } from "../../../redux/modules/myPage";
import { requestFollowing, requestFollower } from "../../../redux/modules/user";

import { MySpaceTab } from "../../../components/MySpace";
import { Profile, Button, Icon, Title, Subtitle } from "../../../elements";
import iconBrunch from "../../../static/icons/sns/brunch.svg";
import iconEmail from "../../../static/icons/sns/E-mail.svg";
import iconInstagram from "../../../static/icons/sns/instagram.svg";
import iconLinkedin from "../../../static/icons/sns/linkedin.svg";
import adventure from "../../../static/images/MyPageImages/adventure.svg";
import artist from "../../../static/images/MyPageImages/artist.svg";
import detail from "../../../static/images/MyPageImages/detail.svg";
import harmonious from "../../../static/images/MyPageImages/harmonious.svg";
import innovator from "../../../static/images/MyPageImages/innovator.svg";
import inventor from "../../../static/images/MyPageImages/inventor.svg";
import back_inventor from "../../../static/images/MyPageImages/back_inventor.svg";
import back_adventure from "../../../static/images/MyPageImages/back_adventure.svg";
import back_artist from "../../../static/images/MyPageImages/back_artist.svg";
import back_detail from "../../../static/images/MyPageImages/back_detail.svg";
import back_harmonious from "../../../static/images/MyPageImages/back_harmonious.svg";
import back_innovator from "../../../static/images/MyPageImages/back_innovator.svg";

const TopOfProfile = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { info, exp, feed } = props;
    // console.log(info);
    let account_id = "";
    let nickname = "";
    let following = "";
    let follower = "";
    let tendency = "";
    let profile = "";
    let job = "";
    let Email = "";
    let instagram = "";
    let linkedin = "";
    let brunch = "";
    if (info) {
        account_id = info.account_id;
        nickname = info.nickname;
        following = info.following_count;
        follower = info.follower_count;
        tendency = info.tendency;
        profile = info.profile_img;
        job = info.job;
        Email = info.work_email;
        instagram = info.insta;
        linkedin = info.linked_in;
        brunch = info.brunch;
        if(job === "uiux"){
            job = "UI/UX"
        } else if(job === "fashion"){
            job = "??????"
        } else if(job === "typo"){
            job = "??????????????????"
        } else if(job === "craft"){
            job = "??????"
        } else if(job === "package"){
            job = "?????????"
        } else if(job === "graphic"){
            job = "?????????"
        } else if(job === "video"){
            job = "??????/??????"
        } else if(job === "product"){
            job = "??????"
        } else if(job === "game"){
            job = "??????/?????????"
        } else if(job === "edit"){
            job = "?????????/??????"
        } else if(job === "eco"){
            job = "??????/????????????/??????"
        }
    }
    const followingList = () => {
        dispatch(requestFollowing({account_id, dispatch}));
    }
    const followerList = () => {
        dispatch(requestFollower({account_id, dispatch}));
    }

    const ClickTendency = () => {
        navigate(`/Result/${tendency}`, {
            state: {
                title: { tendency },
                from: true,
                account_id: account_id
            },
        });
        // console.log('clicktendency');
    }

    return (
        <>
        <div className="col-start-2 col-end-6">
            <div className="w-full">
                
                {tendency == "???????????? ?????????" && (
                    <div className="grid items-center justify-items-center relative bg-[#E9EDFF] h-[22.5rem] w-full">
                        <img src={back_inventor} />
                    </div>
                )}
                {tendency == "????????? ?????????" && (
                    <div className="grid items-center justify-items-center relative bg-[#FFF7E1] h-[22.5rem] w-full">
                        <img src={back_adventure} />
                    </div>
                )}
                {tendency == "????????? ?????????" && (
                    <div className="grid items-center justify-items-center relative bg-[#EDDFFF] h-[22.5rem] w-full">
                        <img src={back_artist} />
                    </div>
                )}
                {tendency == "????????? ??????" && (
                    <div className="grid items-center justify-items-center relative bg-[#FEEEE8] h-[22.5rem] w-full">
                        <img src={back_detail} />
                    </div>
                )}
                {tendency == "???????????? ?????????" && (
                    <div className="grid items-center justify-items-center relative bg-[#DCF0EC] h-[22.5rem] w-full">
                        <img src={back_harmonious} />
                    </div>
                )}
                {tendency == "????????? ?????????" && (
                    <div className="grid items-center justify-items-center relative bg-[#FEEAED] h-[22.5rem] w-full">
                        <img src={back_innovator} />
                    </div>
                )}
                <div className="relative items-center justify-items-center -top-24">
                    <div className="flex flex-col items-center">
                        <Profile size="1" src={profile} />
                        <div className="ml-2">
                            <div className="grid p-1 rounded-lg justify-items-center">
                                <Title size="2">{nickname}</Title>
                                {/* <Link
                                    to={{
                                        pathname: `/Result/${tendency}`,
                                        state: {
                                            title: { tendency },
                                            from: true,
                                        },
                                    }}
                                > */}
                                <div className="mt-2 mb-4 cursor-pointer " onClick={ClickTendency}>
                                    {tendency == "????????? ?????????" && <img src={adventure} />}
                                    {tendency == "????????? ?????????" && <img src={artist} />}
                                    {tendency == "????????? ??????" && <img src={detail} />}
                                    {tendency == "???????????? ?????????" && <img src={harmonious} />}
                                    {tendency == "????????? ?????????" && <img src={innovator} />}
                                    {tendency == "???????????? ?????????" && <img src={inventor} />}
                                </div>
                                {/* </Link> */}
                                <Subtitle size="1">{job} Designer</Subtitle>
                                <div className="my-4">
                                    <span onClick={followingList}>????????? {following}</span> ??? <span onClick={followerList}>????????? {follower}</span>
                                </div>

                                <div className="flex flex-row p-1 text-2xl">
                                    <div className="mx-2 cursor-pointer">
                                        <a href={'mailto:'+Email} target="_blank">
                                            {Email && <Icon name="Email" src={iconEmail} iconSize="32" />}
                                        </a>
                                    </div>
                                    <div className="mx-2 cursor-pointer">
                                        <a href={'http://instagram.com/'+instagram} target="_blank">
                                            {instagram && <Icon name="Instagram" src={iconInstagram} iconSize="32" />}
                                        </a>
                                    </div>
                                    <div className="mx-2 cursor-pointer">
                                        <a href={'http://linkedin.com/in/'+linkedin} target="_blank">
                                            {linkedin && <Icon name="LinkedIn" src={iconLinkedin} iconSize="32" />}
                                        </a>
                                    </div>
                                    <div className="mx-2 cursor-pointer">
                                        <a href={'http://brunch.co.kr/@'+brunch} target="_blank">
                                            {brunch && <Icon name="Brunch" src={iconBrunch} iconSize="32" />}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MySpaceTab profile={info && info?.profile_img} info={info} exp={exp} feed={feed} />
                </div>
            </div>
        </div>
        
        </>
    );
};

export default TopOfProfile;
