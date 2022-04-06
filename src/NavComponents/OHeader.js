import React, { useState, useEffect } from "react";
import { Title, Image, Logo, Profile, Icon, Button } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { categoryDimo } from "../redux/modules/dimo";
import { Modal } from "../elements/Tools/Modal";

const OHeader = (props) => {
    const [is_login, setIsLogin] = useState(false);
    // const [ownerId, setOwnerId] = useState("");
    const [accountId, setAccountId] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const category = "uiux";
    const board = "QNA";
    let nickname = "";
    let owner_id = "";
    const setPage = () => {
        dispatch(categoryDimo({ category, dispatch, board }));
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    useEffect(() => {
        // const cookie = getCookie("access_token");
        const session = sessionStorage.getItem("access_token");
        const account_id = getCookie("account_id");
        if (session) {
            setIsLogin(true);
            // setOwnerId(account_id);
            setAccountId(account_id);
        } else {
            setIsLogin(false);
        }
    }, []);
    const goToMyPage = () => {
        const ownerId = sessionStorage.getItem("account_id");
        navigate(`/myspace/myprofile/${ownerId}`, {
            state: {
                nickname: { nickname },
                owner_id: { ownerId },
            },
        });
    };

    return (
        <div className="md:h-[7.8rem] w-full">
            <div className="flex justify-center items-center mx-auto md:absolute md:top-[2.25rem] md:left-[7.375rem] py-5 md:py-0 ">
                <Link to="/">
                    <Logo name="DplusCFF" />
                </Link>
            </div>

            <div className="flex flex-row md:h-[7.8rem] w-full md:w-3/6 xl:w-3/4 ml-auto justify-center md:justify-start py-5 md:py-0">
                {/* <Title size="6"><Link to="/">홈</Link></Title> */}

                <div className="flex items-center gap-3 lg:gap-10 text-dpurple-300 md:pl-10 xl:pl-10 2xl:pl-1">
                    <Title size="6">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6" onClick={setPage}>
                        <Link to="/dimo/qna">디모</Link>
                    </Title>
                    {is_login && (
                        <Title size="6" onClick={goToMyPage} className="cursor-pointer">
                            마이페이지
                        </Title>
                    )}
                    {is_login ? (
                        <div className="xl:absolute xl:right-10 2xl:right-36 top-8">
                            <div className="flex flex-row items-center justify-center gap-5">
                                <Link to="/createart">
                                    <Button size="3" color="4" className="hidden xl:flex">
                                        작업 업로드
                                    </Button>
                                </Link>
                                <div onClick={() => alert("로그아웃되었습니다!")}>
                                    <Link to="/logout">
                                        <Title size="6">로그아웃</Title>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Title size="6" className="cursor-pointer" onClick={openModal}>
                                Login
                                {/* <Link to="/login">login</Link> */}
                            </Title>
                            <Modal open={modalOpen} close={closeModal} header="">
                                <main> {props.children} </main>
                            </Modal>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OHeader;
