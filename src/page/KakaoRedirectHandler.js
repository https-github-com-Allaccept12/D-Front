
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { kakaoLoginAxios } from '../redux/modules/user';

const KakaoRedirectHandler = props => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    dispatch(kakaoLoginAxios({code, history}))
  })

  return 'wait a minute';
};

export default KakaoRedirectHandler;