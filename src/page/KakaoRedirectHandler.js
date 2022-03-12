
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin } from '../redux/modules/user';
import { Main } from './Main';

const KakaoRedirectHandler = props => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(async () => {
    await dispatch(kakaoLogin(code));
  }, 
  [dispatch]);

  return <Main />;
};

export default KakaoRedirectHandler;