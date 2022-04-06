import React, { useState, useEffect } from "react";
import { Title, Icon, Logo, Profile, Button } from "../elements";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal } from "../elements/Tools/Modal";

const Header = (props) => {
    const [is_login, setIsLogin] = useState(false);
    // const [ownerId, setOwnerId] = useState("");
    const [accountId, setAccountId] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    let navigate = useNavigate();
    let nickname = "";
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
        <div className="bg-gradient-to-r from-[#A162F7] to-[#6F88FC] h-32 md:h-[30rem] relative w-full ">
            <div className="flex justify-center items-center mx-auto md:absolute md:top-[2.25rem] md:left-[7.375rem] py-5 md:py-0 ">
                <Link to="/">
                    <Logo name="DplusCF" logoSizeW="200" logoSizeH="59" />
                </Link>
            </div>
            <div className="hidden lg:flex lg:flex-row md:h-[7.8rem] w-full lg:w-4/6 xl:w-3/4 ml-auto text-white md:pl-10 xl:pl-10 2xl:pl-1">
                {/* <Title size="6"><Link to="/">홈</Link></Title> */}
                <div className="flex items-center gap-8">
                    <Title size="6">
                        <Link to="/art/list/all">모아보기</Link>
                    </Title>
                    <Title size="6">
                        <Link to="/dimo/qna">디모</Link>
                    </Title>

                    {is_login && (
                        <Title size="6" onClick={goToMyPage} className="cursor-pointer">
                            마이페이지
                        </Title>
                    )}

                    {is_login ? (
                        <>
                            <div className="xl:absolute xl:right-10 2xl:right-36 top-8">
                                <div className="flex flex-row items-center justify-center gap-5">
                                    <Button size="3" color="7">
                                        <Link to="/createart">작업 업로드</Link>
                                    </Button>
                                    <div onClick={() => 
                                    Swal.fire({
                                        icon: 'success',
                                        title: '로그아웃 되었습니다',
                                        showConfirmButton: false,
                                        timer: 1000
                                    })}>
                                    <Link to="/logout">
                                        <Title size="6">로그아웃</Title>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Title
                                size="6"
                                className="cursor-pointer xl:absolute xl:right-10 2xl:right-36 top-12"
                                onClick={openModal}
                            >
                                <Icon name="User" />
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

export default Header;
