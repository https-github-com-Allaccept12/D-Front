import React from "react";
import { Button, Image, Input } from "../../elements";

import { useHistory } from "react-router-dom";


const CreateMySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>

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




    </>

  );
};

export default CreateMySpaceUser;