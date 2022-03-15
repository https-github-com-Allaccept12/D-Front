import React from "react";
import { Button, Image, Input, CheckBox } from "../../elements";

import { useHistory } from "react-router-dom";
import { Checkbox } from "@mui/material";


const CreateMySpaceUser = (props) => {
  let history = useHistory();
  return (
    <><div className="grid grid-cols-4">


                <div className="col-start-1 row-start-2 col-span-2">
                <Input label="회사정보" />
                </div>

                <div className="row-start-3 col-start-1 col-end-3">
                <Input label="부서"/>
                </div>
                <div className="row-start-3 col-start-3 col-end-6">
                <Input label="직책"/>
                </div>

                <div className="row-start-4 col-start-1 col-end-3">
                <Input label="기간"/>
                <CheckBox label="현재 재직중" checked />
                </div>
                <div className="row-start-4 col-start-3 col-end-6">
                <Input label="기간"/>
                </div>



                <div className="w-full row-start-5 col-span-5">
                연락처
                <Input textarea />
                </div>

</div>

    </>

  );
};

export default CreateMySpaceUser;