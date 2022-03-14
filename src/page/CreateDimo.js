import React from "react";
import { Button, Image, Input } from "../elements";

import { useHistory } from "react-router-dom";

const status = "qna"

const CreateMySpaceUser = (props) => {
  let history = useHistory();
  if(status === "qna")return (
    <>

               <div className="p-4 bg-slate-200">
               <div className="col-start-2 row-start-2 col-span-3 w-full">
                크리에이트 디모
                <Input placeholder="해시태그를 입력" />
                <Input placeholder="제목을 입력해주세여" />
                </div>

                <div className="col-start-2 row-start-3 col-span-3 w-full">

                <Input textarea placeholder="내용을 입력해주세여" />
                </div>
                <div>
                  파일추가
                </div>
                <Button>입력 완료!</Button>
                </div>


    </>

  );

  if(status === "shared")return (
    <>
        <div className="col-start-2 row-start-1 col-span-3">
               <Image size="5xl" />
               </div>
               <div>
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
                <Button>입력 완료!</Button>
                </div>


    </>

  );
};

export default CreateMySpaceUser;