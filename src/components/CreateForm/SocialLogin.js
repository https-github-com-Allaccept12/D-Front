import React from "react";
import { Button } from "../../elements";

import { useHistory } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
// import GoogleLogin from 'react-google-login';

// const onLogin = e => {};

//로그인 성공했을 떄 처리 함수 
const successGoogle = (response) => {
  console.log(response);
}

//로그인 실패했을 때 처리 함수 
const failGoogle = (response) => {
  console.log(response);
}

const SocialLogin = (props) => {
  // let history = useHistory();
  return (
    <div className="flex flex-row p-3 gap-3 justify-center items-center shadow-lg">
        <a href={KAKAO_AUTH_URL}>
            카카오 로그인하기
        </a>
      {/* <Button>
          구글로 로그인
      </Button> */}
      {/* <GoogleLogin
        clientId="519093450264-n3cm4m0h2d95gpipnigtt2erhotp7l58.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={successGoogle}
        onFailure={failGoogle}
        cookiePolicy={'single_host_origin'}
        /> */}
        {/* <button id="login-google-btn" 
        onClick="location.href='https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile%20openid&response_type=code&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/token&client_id=519093450264-n3cm4m0h2d95gpipnigtt2erhotp7l58.apps.googleusercontent.com&redirect_uri=http://localhost:8081/user/google/callback&access_type=offline'"> 구글로 로그인하기 </button> */}
    </div>
  );
};

export default SocialLogin;