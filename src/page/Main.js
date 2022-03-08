import React from "react";
import { Button, Input } from "../elements";

import { useHistory } from "react-router-dom";
import { useInput } from "../hooks";

const Main = (props) => {
  let history = useHistory();
  const noEmail = v => !v.includes("@");
  const maxLen = v => v.length < 10;
  const name = useInput("이름은최대10글자", maxLen);
  

  // dispatch(userActions.loginFB({...name}));
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        메인페이지
      </Button>
      <Input {...name} />
    </div>
  );
};

export default Main;