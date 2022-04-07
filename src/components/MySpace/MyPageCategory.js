import React, { useState, useEffect } from "react";
import { Button, Title, SearchInput } from "../../elements";

import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const TabBtn = tw.button`
font-min1 Text-base w-full text-left px-3 py-2  indent-7
`;
const MyPageCategory = (props) => {
    const navigate = useNavigate();
    const { myPageId, account_id } = props;
    const [active, setActive] = useState("0");
    const [isMine, setIsMine] = useState(false);
    useEffect(() => {
        if(myPageId == account_id){
            setIsMine(true);
        }
    })

    const toEditMySpace = () => {
        navigate(`/editmyspace/${myPageId}`);

    }

    const toMyWork = () => {
        setActive("1");
        navigate(`/myspace/mywork/${myPageId}`);
    }

    const toMyPic = () => {
        setActive("2");
        navigate(`/myspace/mypic/${myPageId}`);
    }

    const toShare = () => {
        setActive("3");
        navigate(`/myspace/share/${myPageId}`);
        
    }

    const toQNA = () => {
        setActive("4");
        navigate(`/myspace/qna/${myPageId}`);
        
    }

    return (
        <>
            <div className="hidden 2xl:contents 2xl:fixed top-20">
                <div
                    className="flex flex-col justify-center pl-[2.5rem] mt-10 ml-6 p-2 w-[17.75rem] h-[32.5rem]
        rounded-lg bg-white"
                >
                    <div className="">
                        <Title size="5" className="my-2">
                            ✨ My Profile
                        </Title>

                        <Link to="/myspace/myprofile">
                            <TabBtn
                                size="2"
                                onClick={() => {
                                    setActive("0");
                                }}
                                className={active === "0" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                프로필
                            </TabBtn>
                        </Link>
                        {isMine && 
                            // <Link to='/editmyspace/${myPageId}'>
                                <TabBtn onClick={toEditMySpace} size="2">
                                    <span className="text-dgray-500">프로필 수정</span>
                                </TabBtn>
                            // </Link>
                        }
                        

                        <Title size="5" className="my-2">
                            🎨 Work
                        </Title>

                        {/* <Link to="/myspace/mywork"> */}
                            <TabBtn
                                size="2"
                                onClick={toMyWork}
                                className={active === "1" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                프로젝트
                            </TabBtn>
                        {/* </Link> */}

                        {isMine &&
                            // <Link to="/myspace/mypic">
                                <TabBtn
                                    size="2"
                                    onClick={toMyPic}
                                    className={active === "2" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                                >
                                    스크랩한 프로젝트
                                </TabBtn>
                            // </Link>
                        }
                        
                        {isMine &&
                            <>
                            <Title size="5" className="my-2">
                                📑Community
                            </Title>

                            {/* <Link to="/myspace/share"> */}
                                <TabBtn
                                    size="2"
                                    onClick={toShare}
                                    className={active === "3" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                                >
                                    게시글
                                </TabBtn>
                            {/* </Link> */}

                            {/* <Link to="/myspace/qna"> */}
                                <TabBtn
                                    size="2"
                                    onClick={toQNA}
                                    className={active === "4" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                                >
                                    QNA
                                </TabBtn>
                            {/* </Link> */}
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPageCategory;
