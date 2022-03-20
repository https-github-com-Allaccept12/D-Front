import React from "react";
import { Button, Image, Input, CheckBox } from "../../../elements";

import { useHistory } from "react-router-dom";


const CreateMyExp = (props) => {
  let history = useHistory();
  return (
    <><div className="grid grid-cols-4">


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
                <Input title="소개" textarea />
                </div>

</div>

    </>

  );
};

export default CreateMyExp;