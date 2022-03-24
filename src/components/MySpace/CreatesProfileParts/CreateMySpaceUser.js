import React from "react";
import { Button, Image, Input } from "../../../elements";

import { useHistory } from "react-router-dom";


const CreateMySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>
<div className="grid grid-cols-4 gap-6">

        <div className="row-start-2 col-span-2">
               <Image shape="big_square" />
               </div>
               
                <div className="col-start-3 row-start-2 col-span-2">
                <Input title="이름" />
                <Input title="직업" />
                <Input title="유형" />
                </div>

                <div className="col-start-1 row-start-3 col-span-4 w-full">
                <hr className="border-4" />
                연락처
                <Input title="이메일" />
                <Input title="링크드인"/>
                <Input title="브런치"/>
                <Input title="인스타"/>
                </div>
                </div>
    </>

  );
};

export default CreateMySpaceUser;