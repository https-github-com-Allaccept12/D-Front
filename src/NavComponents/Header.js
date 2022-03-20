import React from "react";
import { Title, Image, Logo } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("access_token");
    if(cookie){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }, [])
  const location = useLocation();
  const a = location.pathname

  if(a === "/") return (
      <div className="bg-gradient-to-r from-[#A162F7] to-[#6F88FC] h-32 md:h-[30rem] relative w-full ">
        <div className="head">
        <Link to="/"><Logo name="DplusW" logoSizeW="200" logoSizeH="59" /></Link>
        </div>
<div className="header  flex-row justify-evenly gap-9 text-white hidden md:flex">
<Title size="6"><Link to="/">홈</Link></Title>
        <Title size="6"><Link to="/art/list/all">모아보기</Link></Title>
        <Title size="6"><Link to="/dimo/qna/all">디모</Link></Title>
        <Title size="6"><Link to="/myspace">마이페이지</Link></Title>
        {is_login ? <Title size="6"><Link to="/logout">로그아웃</Link></Title> : <Title size="6"><Link to="/myposts">logins</Link></Title>}
        <Title size="6"><Link to="/tendencytest">cre!</Link></Title>
        </div>

        </div>


  );
else  {
  return (
  <div className="h-14 md:h-[7.8rem] relative w-full">
        <div className="head">
        <Link to="/"><Logo name="DplusC" logoSizeW="200" logoSizeH="59" /></Link>
        </div>
<div className="header flex-row justify-evenly gap-9 text-dpurple-200 hidden md:flex">
<Title size="6"><Link to="/">홈</Link></Title>
        <Title size="6"><Link to="/art/list/all">모아보기</Link></Title>
        <Title size="6"><Link to="/dimo/qna/all">디모</Link></Title>
        <Title size="6"><Link to="/myspace">마이페이지</Link></Title>
        {is_login ? <Title size="6"><Link to="/logout">로그아웃</Link></Title> : <Title size="6"><Link to="/myposts">logins</Link></Title>}
        <Title size="6"><Link to="/tendencytest">cre!</Link></Title>
        </div>

        </div>
)
}
  
};

export default Header;