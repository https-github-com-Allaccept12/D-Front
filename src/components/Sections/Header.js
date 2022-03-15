import React from "react";
import { Grid, Title, Image, ColGrid } from "../../elements";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("access_token");
    console.log(cookie);
    if(cookie){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  })
  if (is_login) {
    return (
      <div className="grid grid-cols-9 bg-slate-800 justify-items-center items-center">
        <div className="flex-shrink-0"><Image /></div>
        <Title><Link to="/">홈</Link></Title>
        <Title><Link to="/artwork">Artwork</Link></Title>
        <Title><Link to="/dimo">Dimo</Link></Title>
        <Title><Link to="/myspace">MySpace</Link></Title>
        <Title><Link to="/logout">로그아웃</Link></Title>
        <Title><Link to="/createart">make</Link></Title>
        <Title><Link to="/tendencytest">cre!</Link></Title>
        <GoogleIcon />
        </div>
  );
  }else{
    return (
      <div className="grid grid-cols-9 bg-slate-800 justify-items-center items-center">
        <div className="flex-shrink-0"><Image /></div>
        <Title><Link to="/">홈</Link></Title>
        <Title><Link to="/artwork">Artwork</Link></Title>
        <Title><Link to="/dimo">Dimo</Link></Title>
        <Title><Link to="/myspace">MySpace</Link></Title>
        <Title><Link to="/myposts">logins</Link></Title>
        <Title><Link to="/createart">make</Link></Title>
        <Title><Link to="/tendencytest">cre!</Link></Title>
        <GoogleIcon />
        </div>
        
  );
  }

  
};

export default Header;