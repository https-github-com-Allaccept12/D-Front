import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./OAuth";
// import { GOOGLE_AUTH_URL } from "../../shared/GoogleOAuth";
import KakaoBtn from "../static/images/kakao_button.png";
// import GoogleLogin from 'react-google-login';

// const onLogin = e => {};


const SocialLogin = (props) => {
    // let history = useHistory();
    return (
        <div className="">
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
