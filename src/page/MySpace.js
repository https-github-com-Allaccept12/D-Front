import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";


const MySpace = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        내 마이 페이지(공개)
      </Button>
    </div>
  );
};

export default MySpace;