
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { kakaoLoginAxios } from '../redux/modules/user';
import { setCookie } from "../shared/cookie";

const KakaoRedirectHandler = props => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    dispatch(kakaoLoginAxios({code}))
  })
  if (sessionStorage.getItem("access_token")) {
    setCookie("access_token", sessionStorage.getItem("access_token"), 7);
    setCookie("refresh_token", sessionStorage.getItem("access_token"), 7);
  }
  history.replace("/");

  return "ok";
};

export default KakaoRedirectHandler;