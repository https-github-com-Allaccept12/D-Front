import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";


const Main = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        메인페이지
      </Button>
    </div>
  );
};

export default Main;