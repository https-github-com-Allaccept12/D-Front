import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default NotFound;