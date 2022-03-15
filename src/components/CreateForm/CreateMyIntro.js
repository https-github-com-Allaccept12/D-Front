import React from "react";
import { Button, Image, Input } from "../../elements";

import { useHistory } from "react-router-dom";


const CreateMyIntro = (props) => {
  let history = useHistory();
  return (
    <>


                <div className="col-start-2 row-start-3 col-span-3 w-full">
                소개
                <Input textarea />
                </div>


    </>

  );
};

export default CreateMyIntro;