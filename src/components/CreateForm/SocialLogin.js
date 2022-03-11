import React from "react";
import { Button } from "../../elements";

import { useHistory } from "react-router-dom";


const SocialLogin = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-row p-3 gap-3 justify-center items-center shadow-lg">

      <Button>
          카카오로 로그인
      </Button>
      <Button>
          구글로 로그인
      </Button>
    </div>
  );
};

export default SocialLogin;