
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { kakaoLoginAxios } from '../redux/modules/user';
// import { Spinner } from '../elements/Common/Spinner';
// import  Main  from './Main';

const KakaoRedirectHandler = props => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory();

  const code = new URL(window.location.href).searchParams.get('code');
  console.log('code:', code);

  // useEffect(async () => {
  //   await dispatch(kakaoLogin(code));
  // }, 
  // [dispatch]);
  useEffect(() => {
    dispatch(kakaoLoginAxios({code, history}))
  })

  // return (<></>);
  return 'wait a minute';
};

export default KakaoRedirectHandler;