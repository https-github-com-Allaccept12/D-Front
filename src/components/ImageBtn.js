import React from "react";
import { Button, Image } from "../elements";

import { useHistory } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="flex flex-row">
    <Image />
      <Button
        onClick={() => {
          
        }}
      >
        이미지 업로드
      </Button>
      </div>
    </>
  );
};

export default NotFound;