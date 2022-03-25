import React, { useState } from "react";
import { Button, Title, Input, CheckBox } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useInput } from "../../../hooks";

const TitleBox = tw.div`
flex justify-between items-center flex-row gap-4 col-span-full
`
const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full my-10
`


const CreateMyExpBox = (props) => {
  let history = useHistory();

  const validMaxLen1000 = (value) => value.length <= 1000;
  const sub = useInput("", [validMaxLen1000]);

  

  return (
    <>
   
      {props.countList && props.countList.map((item, i) => (

        <div key={i} className="grid grid-cols-4 w-full col-span-full gap-6">

                <div className="col-start-1 row-start-2 col-span-2">
                <Input title="회사" />
                </div>

                <div className="row-start-3 col-start-1 col-end-3">
                <Input title="부서"/>
                </div>
                <div className="row-start-3 col-start-3 col-end-6">
                <Input title="직책"/>
                </div>

                <div className="row-start-4 col-start-1 col-end-3">
                <Input title="기간"/>
                <CheckBox inline="현재 재직중" />
                </div>
                <div className="row-start-4 col-start-3 col-end-6">
                <Input title="기간"/>
                </div>



                <div className="w-full row-start-5 col-span-8">
                <Input title="업무내용" textarea cardSize="3" maxLen="1000" value={sub.value} onChange={sub.onChange} is_error={sub.errors} is_value={sub.value.length} />
                </div>
                <InnerLine />
                </div>

                ))}

    </>

  );
};

export default CreateMyExpBox;