import React from "react";
import { Button, Image, Input } from "../../elements";

import { useHistory } from "react-router-dom";


const CreateMyIntro = (props) => {
  let history = useHistory();
  return (
    <>

<div className="grid grid-cols-4 gap-6">

  <div className="col-start-1 row-start-3 col-span-4 w-full">
        한줄소개
        <Input textarea />
        </div>
                <div className="col-start-1 row-start-4 col-span-4 w-full">
                간단소개글
                <Input textarea />
                </div>

</div>
    </>

  );
};

export default CreateMyIntro;