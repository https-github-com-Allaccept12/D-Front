import axios from "axios";
import { useHistory } from 'react-router-dom';
import { setCookie } from "../../shared/cookie";
import { URL, token } from "../UrlForAxios";

export default class userApi {
  
  // constructor() {
  //   this.base = process.env.REACT_APP_SERVER;
  // }

  async kakaoLogin({code, history}) {
    const kakaoLoginConfig = {
      method: "GET",
      url: `${process.env.REACT_APP_KAKAO_URI}?code=${code}`,
    };
    return axios(kakaoLoginConfig)
      .then(res => {
        // console.log(res)
        if (res.data.result === 'success') {
          let access_token = res.data.data.access_token;
          let refresh_token = res.data.data.refresh_token;
          let have_to_signup = res.data.data.signUp;
          sessionStorage.setItem("access_token", access_token);
          sessionStorage.setItem("refresh_token", refresh_token);
          if (have_to_signup) {
            history.push("/TendencyTest");
          }
          // } else{
          //   window.location.href = "/";
          // }
          return;
          // history.replace("/");
          // return "wait";
        };
      })
      .catch(err => console.log(err.response));
  }

}