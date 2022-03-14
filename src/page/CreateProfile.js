import React from "react";
import { Button, Image, Input, CheckBox, SelectBox, DatePicker } from "../elements";

import { useHistory, Link } from "react-router-dom";
import { PostList , DimoSlider, AdjBar, DimoList, ImageBtn } from "../components";


const CreateProfile = (props) => {
  let history = useHistory();

  return (
    <>

<div className="grid grid-cols-7 grid-rows-4 bg-yellow-400 w-full max-h-screen">

<button className="col-start-5"><Link to="/">다음으로 넘어가기</Link></button>
</div>

<div className="modal-body grid p-4 w-full h-screen bg-yellow-500
      grid-cols-4">
          <div className="absolute">
          <Image shape="big_square"/>
          프로필
          </div>
          <div className="md:col-start-2 bg-yellow-100 col-span-4
           grid h-full grid-rows-3 grid-cols-5 justify-items-center items-center">
               <div className="col-start-2 row-start-1 col-span-3">
               <Image size="5xl" />
               </div>
               
                <div className="col-start-3 row-start-1 col-span-2">
                <Input label="아이디" />
                <Input label="이름"/>
                <Input label="직업"/>
                </div>

                <div className="col-start-2 row-start-2 col-span-3 w-full">
                연락처
                <Input label="이메일" />
                <Input label="링크드인"/>
                <Input label="브런치"/>
                <Input label="인스타"/>
                </div>

                <div className="col-start-2 row-start-3 col-span-3 w-full">
                소개
                <Input textarea />
                </div>

                <div className="col-start-5 row-start-4 col-span-2 w-full">
                <Button>입력 완료!</Button>
                </div>

               </div>
               </div>
     


    
    </>
  );
};

export default CreateProfile;