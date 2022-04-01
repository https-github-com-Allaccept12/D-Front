import React, { useState } from "react";
import { Button, Title, SearchInput } from "../../elements";

import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const TabBtn = tw.button`
font-min1 Text-base w-full text-left px-3 py-2  indent-7
`;
const MyPageCategory = (props) => {
    const [active, setActive] = useState("0");

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
                                내 프로필
                            </TabBtn>
                        </Link>

                        <Link to="/editmyspace/z">
                            <TabBtn size="2">
                                <span className="text-dgray-500">프로필 수정</span>
                            </TabBtn>
                        </Link>

                        <Title size="5" className="my-2">
                            🎨 Work
                        </Title>

                        <Link to="/myspace/mywork">
                            <TabBtn
                                size="2"
                                onClick={() => {
                                    setActive("1");
                                }}
                                className={active === "1" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                내작업
                            </TabBtn>
                        </Link>

                        <Link to="/myspace/mypic">
                            <TabBtn
                                size="2"
                                onClick={() => {
                                    setActive("2");
                                }}
                                className={active === "2" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                스크랩한 작업
                            </TabBtn>
                        </Link>

                        <Title size="5" className="my-2">
                            📑Community
                        </Title>

                        <Link to="/myspace/share">
                            <TabBtn
                                size="2"
                                onClick={() => {
                                    setActive("3");
                                }}
                                className={active === "3" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                게시글
                            </TabBtn>
                        </Link>

                        <Link to="/myspace/qna">
                            <TabBtn
                                size="2"
                                onClick={() => {
                                    setActive("4");
                                }}
                                className={active === "4" ? "bg-dpurple-100 text-dpurple-200" : "text-dgray-500"}
                            >
                                QNA
                            </TabBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPageCategory;
