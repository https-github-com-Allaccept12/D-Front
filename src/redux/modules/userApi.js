import axios from "axios";

export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async kakaoLogin({code, history}) {
    const kakaoLoginConfig = {
      method: "GET",
      url: `${process.env.REACT_APP_KAKAO_URI}?code=${code}`,
    };
    return axios(kakaoLoginConfig)
      .then(res => {
        console.log(res.data)
        if (res.data.data.login === true) {
        //   navigate("/", {replace:true})
          history.replace('/');
          return (res.data);
        };
        if (res.data.data.login === false) {
          history.replace(
            "/", {
              state : {
                kakaoId: res.data.data.kakaoMemberInfo.kakaoId,
                email: res.data.data.kakaoMemberInfo.email,
                profileImage: res.data.data.kakaoMemberInfo.profileImage
              }
            }
          )
        };
      })
      .catch(err => console.log(err.response));
  }
}