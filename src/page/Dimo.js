import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { DimoFilter, DimoList } from "../components/Dimo";
import tw from "tailwind-styled-components";
import { Title, Button, CategoryMini, Icon } from "../elements";
import { DimoSlider } from "../components";

const SlideBox = tw.div`
row-start-2 col-span-full
`;

const Box = tw.div`
row-start-3
`;

const MobileBtn = tw.button`
bg-dpurple-200  rounded-full p-2 xl:hidden fixed bottom-10 right-5 text-white shadow-md
`;

const Dimo = () => {
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];
    // console.log(b);
    if (b === "qna")
        return (
            <>
                <div className="bg-dgray-200 min-h-screen h-[200rem]">
                    <div className="xl:grid xl:grid-cols-4 ">
                        <div className="flex flex-row p-4 xl:pl-28 2xl:pl-44 gap-3 h-[7rem] justify-start items-center">
                            {b === "qna" ? (
                                <Title size="6" className="text-dpurple-200">
                                    <Link to="/dimo/qna/all">QNA</Link>
                                </Title>
                            ) : (
                                <Title size="6">
                                    <Link to="/dimo/qna/all">QNA</Link>
                                </Title>
                            )}

                            {b === "shared" ? (
                                <Title size="6" className="text-dpurple-200">
                                    <Link to="/dimo/shared/all">정보공유</Link>
                                </Title>
                            ) : (
                                <Title size="6">
                                    <Link to="/dimo/shared/all">정보공유</Link>
                                </Title>
                            )}
                        </div>
                        <div className="hidden xl:contents">
                            <div className="col-start-4 w-36 xl:mt-10 2xl:ml-32 ">
                                <Link
                                    to={{
                                        pathname: `/dimo/create/${b}`,
                                        state: {
                                            title: { b },
                                        },
                                    }}
                                >
                                    <Button size="3">글쓰기</Button>
                                </Link>
                            </div>
                        </div>
                        <SlideBox>
                            <DimoSlider list={b} />
                        </SlideBox>

                        <Box>
                            <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                                <div className=" flex flex-col h-[44rem]">
                                    <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                        <DimoFilter list={b} />
                                    </div>
                                </div>
                            </div>
                        </Box>

                        <div className="w-full xl:row-start-3 xl:col-start-2 xl:col-end-5">
                            <div className="w-full h-[200rem]">
                                <DimoList list={b} key="key"/>
                                <CategoryMini list={b} />
                                <Link
                                    to={{
                                        pathname: `/dimo/create/${b}`,
                                        state: {
                                            title: { b },
                                        },
                                    }}
                                >
                                    <MobileBtn>
                                        <Icon name="Edit" />
                                    </MobileBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    if (b === "shared")
        return (
            <>
                <div className="bg-dgray-200 min-h-screen h-[200rem]">
                    <div className="xl:grid xl:grid-cols-4 ">
                        <div className="flex flex-row p-4 xl:pl-28 2xl:pl-44 gap-3 h-[7rem] justify-start items-center">
                            {b === "qna" ? (
                                <Title size="6" className="text-dpurple-200">
                                    <Link to="/dimo/qna/all">QNA</Link>
                                </Title>
                            ) : (
                                <Title size="6">
                                    <Link to="/dimo/qna/all">QNA</Link>
                                </Title>
                            )}

                            {b === "shared" ? (
                                <Title size="6" className="text-dpurple-200">
                                    <Link to="/dimo/shared/all">정보공유</Link>
                                </Title>
                            ) : (
                                <Title size="6">
                                    <Link to="/dimo/shared/all">정보공유</Link>
                                </Title>
                            )}
                        </div>
                        <div className="hidden xl:contents">
                            <div className="col-start-4 w-36 xl:mt-10 2xl:ml-32 ">
                                <Link
                                    to={{
                                        pathname: `/dimo/create/${b}`,
                                        state: {
                                            title: { b },
                                        },
                                    }}
                                >
                                    <Button size="3">글쓰기</Button>
                                </Link>
                            </div>
                        </div>
                        <SlideBox>
                            <DimoSlider list={b} />
                        </SlideBox>

                        <Box>
                            <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                                <div className=" flex flex-col h-[44rem]">
                                    <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                        <DimoFilter list={b} />
                                    </div>
                                </div>
                            </div>
                        </Box>

                        <div className="w-full xl:row-start-3 xl:col-start-2 xl:col-end-5">
                            <div className="w-full h-[200rem]">
                                <DimoList list={b} />
                                <CategoryMini list={b} />
                                <Link
                                    to={{
                                        pathname: `/dimo/create/${b}`,
                                        state: {
                                            title: { b },
                                        },
                                    }}
                                >
                                    <MobileBtn>
                                        <Icon name="Edit" />
                                    </MobileBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Dimo;
