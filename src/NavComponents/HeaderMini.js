import React, { useState, useEffect } from "react";
import { Title, Image, Logo, Profile } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToggle } from "../hooks";
import tw from "tailwind-styled-components";

// const MiniBtn = tw.button`
// xl:hidden bg-yellow-300 rounded-full fixed top-0
// `;

const ProfileBox = tw.div`
lg:hidden  fixed top-0 w-full z-50 h-20
`;

const HeaderMini = (props) => {
    const [is_login, setIsLogin] = useState(false);
    const [nickname, setNickname] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [accountId, setAccountId] = useState("");
    const [showCategory, setShowCategory] = useToggle();
    useEffect(() => {
        const cookie = getCookie("access_token");
        const nickname = getCookie("nickname");
        const account_id = getCookie("account_id");
        // console.log(nickname);
        if (cookie) {
            setIsLogin(true);
            setNickname(nickname);
            setOwnerId(account_id);
            setAccountId(account_id);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <>
            <ProfileBox>
                {is_login && (
                    <Title size="6">
                        <Link
                            to={{
                                pathname: `/myspace/myprofile`,
                                state: {
                                    nickname: { nickname },
                                    owner_id: { ownerId },
                                },
                            }}
                        >
                            마이페이지
                        </Link>
                    </Title>
                )}
                {is_login ? (
                    <>
                        <Profile size="6" />
                        <Title size="6">
                            <Link to="/logout">로그아웃</Link>
                        </Title>
                    </>
                ) : (
                    <Title size="6">
                        <Link to="/myposts">로그인하기</Link>
                    </Title>
                )}

                <div className="flex flex-row justify-center items-center">
                    <Title size="6">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/dimo/qna/all">디모</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/tendencytest">cre!</Link>
                    </Title>
                </div>
            </ProfileBox>
            {/* <MiniBtn onClick={setShowCategory}>{showCategory ? <>close</> : <>open!</>}</MiniBtn>

            {showCategory && <></>} */}
        </>
    );
};

export default HeaderMini;
