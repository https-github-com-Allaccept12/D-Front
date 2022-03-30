import React, { useState, useEffect } from "react";
import { Title, Image, Logo } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [is_login, setIsLogin] = useState(false);
    const [ownerId, setOwnerId] = useState("");
    const [accountId, setAccountId] = useState("");
    useEffect(() => {
        // const cookie = getCookie("access_token");
        const session = sessionStorage.getItem("access_token");
        const account_id = getCookie("account_id");
        if (session) {
            setIsLogin(true);
            setOwnerId(account_id);
            setAccountId(account_id);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <div className="w-full z-50 absolute top-0">
            <div className="flex justify-center items-center mx-auto md:absolute md:top-[2.25rem] md:left-[7.375rem] text-white">
                <Link to="/">
                    <Logo name="DplusCF" />
                </Link>
            </div>
            <div
                className="hidden lg:flex lg:flex-row md:h-[7.8rem] w-full lg:w-3/6 xl:w-3/4 ml-auto text-white md:pl-10 xl:pl-10 2xl:pl-1"
                onClick={() => alert("이 페이지에서 나가시겠어요?")}
            >
                {/* <Title size="6"><Link to="/">홈</Link></Title> */}
                <div className="flex items-center gap-8">
                    <Title size="6">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/dimo/qna/all">디모</Link>
                    </Title>
                    {is_login && (
                        <Title size="6">
                            <Link
                                to={{
                                    pathname: `/myspace/myprofile`,
                                }}
                            >
                                마이페이지
                            </Link>
                        </Title>
                    )}
                    {is_login ? (
                        <Title size="6">
                            <Link to="/logout">로그아웃</Link>
                        </Title>
                    ) : (
                        <Title size="6">
                            <Link to="/login">login</Link>
                        </Title>
                    )}
                    {/* <Title size="6">
                        <Link to="/tendencytest">cre!</Link>
                    </Title> */}
                </div>
            </div>
        </div>
    );
};

export default Header;
