import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./OAuth";
// import { GOOGLE_AUTH_URL } from "../../shared/GoogleOAuth";
import KakaoBtn from "../static/images/kakao_button.png";
// import GoogleLogin from 'react-google-login';

// const onLogin = e => {};

//로그인 성공했을 떄 처리 함수
const successGoogle = (response) => {
  console.log(response);
};

//로그인 실패했을 때 처리 함수
const failGoogle = (response) => {
  console.log(response);
};

const SocialLogin = (props) => {
  // let history = useHistory();
  return (
    <div className="flex flex-row p-3 gap-3 justify-center items-center shadow-lg">
      <a href={KAKAO_AUTH_URL}>
        <img src={KakaoBtn} />
      </a>
      {/* <a href={GOOGLE_AUTH_URL}>
          구글 로그인
        </a> */}
    </div>
  );
};

export default SocialLogin;
