import React, { useState, useEffect } from "react";
import { Title, Image, Logo, Profile, Icon } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToggle } from "../hooks";
import { Modal } from "../elements/Tools/Modal";
import tw from "tailwind-styled-components";

// const MiniBtn = tw.button`
// xl:hidden bg-yellow-300 rounded-full fixed top-0
// `;

const ProfileBox = tw.div`
lg:hidden absolute top-0 w-full z-50 h-20
`;

const MobileBtn = tw.button`
bg-dpurple-200  rounded-full p-2 xl:hidden absolute  top-10 left-5 text-white shadow-md
animate-bounce 
`;

const HeaderMini = (props) => {
    let navigate = useNavigate();
    const [is_login, setIsLogin] = useState(false);
    const [nickname, setNickname] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [accountId, setAccountId] = useState("");
    const [showCategory, setShowCategory] = useToggle();
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
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

    const goToMyPage = () => {
        navigate(`/myspace/myprofile/${ownerId}`, {
            state: {
                nickname: { nickname },
                owner_id: { ownerId },
            },
        });
    };
    return (
        <>
            <ProfileBox>
                <div className="flex flex-row items-center justify-center gap-5 py-5 mt-16 text-white sm:py-0 md:mt-24 ">
                    <Title size="6" className="">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/dimo/qna">디모</Link>
                    </Title>
                    {is_login ? (
                        <>
                            <Title size="6">
                                <Link to="/logout">로그아웃</Link>
                            </Title>
                        </>
                    ) : (
                        <>
                            <MobileBtn onClick={openModal}>
                                <Icon name="User" />
                            </MobileBtn>

                            <Modal open={modalOpen} close={closeModal} header="">
                                <main> {props.children} </main>
                            </Modal>
                        </>
                    )}
                    {is_login && (
                        <>
                            <Title size="6" onClick={goToMyPage}>
                                마이페이지
                            </Title>

                            <Title size="1" onClick={() => alert("로그아웃되었습니다!")}>
                                <Link to="/logout">
                                    <Profile size="6" className="" />
                                </Link>
                            </Title>
                        </>
                    )}
                </div>
            </ProfileBox>
            {/* <MiniBtn onClick={setShowCategory}>{showCategory ? <>close</> : <>open!</>}</MiniBtn>

            {showCategory && <></>} */}
        </>
    );
};

export default HeaderMini;
