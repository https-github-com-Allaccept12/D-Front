import React from "react";
import { Button, Image, Input, Text, Image as CircleImage } from "../elements";
import set_profile from "../static/images/set_profile.svg";
import profile_upload from "../static/images/profile_upload.svg";
import { useHistory, Link } from "react-router-dom";


const CreateProfile = (props) => {
  let history = useHistory();

  return (

    <div className="bg-gradient-to-r from-[#9262F7] to-[#7681FB] grid place-content-center w-full max-h-screen">
      <div className="grid bg-white">
        <div className="grid col-start-1 col-end-2">
          <img src={set_profile}/>
          <p className="text-2xl font-bold">님의 프로필을 구성해 볼까요?</p>
          <span>다른 이용자님들에게 보여질 프로필입니다.<br/>설정하신 프로필은 어쩌구저쩌구</span>
        </div>
        <div className="grid col-start-2 col-end-3 mt-10">
          <div className="grid row-start-1 row-end-2 mb-10">
            <p className="text-2xl font-bold">내 정보</p>
            <div className="grid col-start-1 col-end-2">
              <img src={profile_upload}/>
            </div>
            <div className="grid col-start-2 col-end-3">
              <Input cardSize="2" title="아이디"></Input>
              <Input cardSize="2" title="이름"></Input>
              <div>직업</div>
            </div>
          </div>
          <div className="grid row-start-2 row-end-3">
            <p className="text-2xl font-bold">연락처</p>
            <Input cardSize="2" title="이메일"></Input>
            <Input cardSize="2" title="링크드인"></Input>
            <Input cardSize="2" title="브런치"></Input>
            <Input cardSize="2" title="인스타그램"></Input>
          </div>
          <div className="grid row-start-3 row-end-4">
            <p className="text-2xl font-bold">소개</p>
            <Input cardSize="1" title="한 줄 소개"></Input>
          </div>
        </div>
      </div>
      <div className="grid w-full py-10 bg-white place-items-center">
        <Link to="/CompleteProfile">
          <Button size="2" color="1">작성 완료</Button>
        </Link>
      </div>
{/* <button className="col-start-5"><Link to="/">다음으로 넘어가기</Link></button>
</div>

<div className="grid w-full h-screen grid-cols-4 p-4 bg-yellow-500 modal-body">
          <div className="absolute">
          <Image shape="big_square"/>
          프로필
          </div>
          <div className="grid items-center h-full grid-cols-5 col-span-4 grid-rows-3 bg-yellow-100 md:col-start-2 justify-items-center">
               <div className="col-span-3 col-start-2 row-start-1">
               <Image size="5xl" />
               </div>
               
                <div className="col-span-2 col-start-3 row-start-1">
                <Input label="아이디" />
                <Input label="이름"/>
                <Input label="직업"/>
                </div>

                <div className="w-full col-span-3 col-start-2 row-start-2">
                연락처
                <Input label="이메일" />
                <Input label="링크드인"/>
                <Input label="브런치"/>
                <Input label="인스타"/>
                </div>

                <div className="w-full col-span-3 col-start-2 row-start-3">
                소개
                <Input textarea />
                </div>

                <div className="w-full col-span-2 col-start-5 row-start-4">
                <Button>입력 완료!</Button>
                </div>

               </div> */}
    </div>
     


  );
};

export default CreateProfile;