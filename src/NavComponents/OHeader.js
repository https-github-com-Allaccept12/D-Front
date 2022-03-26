import React, { useEffect } from "react";
import { Title, Image, Logo } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    const [is_login, setIsLogin] = React.useState(false);

    useEffect(() => {
        let cookie = getCookie("access_token");
        if (cookie) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <div className="md:h-[7.8rem] w-full">
            <div className="flex justify-center items-center mx-auto md:absolute md:top-[2.25rem] md:left-[9.375rem]">
                <Link to="/">
                    <Logo name="DplusC" logoSizeW="200" logoSizeH="59" />
                </Link>
            </div>

            <div className="bg-red-400 flex flex-row md:h-[7.8rem] w-full md:w-3/6 xl:w-3/4 ml-auto">
                {/* <Title size="6"><Link to="/">홈</Link></Title> */}

                <div className="flex items-center gap-10 bg-yellow-300">
                    <Title size="6">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/dimo/qna/all">디모</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/myspace/myprofile">마이페이지</Link>
                    </Title>
                    {is_login ? (
                        <Title size="6">
                            <Link to="/logout">로그아웃</Link>
                        </Title>
                    ) : (
                        <Title size="6">
                            <Link to="/myposts">logins</Link>
                        </Title>
                    )}
                    <Title size="6">
                        <Link to="/tendencytest">cre!</Link>
                    </Title>
                </div>
            </div>
        </div>
    );
};

export default Header;
