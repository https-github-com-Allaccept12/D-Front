import React from "react";
import { Button, Image, Input } from "../../elements";

import { useHistory } from "react-router-dom";


const CreateMyIntro = (props) => {
  let history = useHistory();
  return (
    <>

<div className="grid grid-cols-4 gap-6">

  <div className="col-start-1 row-start-3 col-span-4 w-full">
        
        <Input title="한줄소개" textarea />
        </div>
                <div className="col-start-1 row-start-4 col-span-4 w-full">

                <Input title="간단소개글" textarea cardSize="3" />
                </div>

</div>
    </>

  );
};

export default CreateMyIntro;