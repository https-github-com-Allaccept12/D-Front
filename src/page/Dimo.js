import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { DimoCategory, DimoAllList, DimoPage, DimoFilter, DimoList } from "../components/Dimo";
import tw from "tailwind-styled-components";
import { Title, Button } from "../elements";
import { DimoSlider } from "../components";

const SlideBox = tw.div`
row-start-2 col-span-full
`;

const Box = tw.div`
row-start-3
`;

const Dimo = () => {
    const location = useLocation();
    const a = location.pathname;
    const b = a.split("/")[2];

    return (
        <>
            <div className="bg-dgray-200 min-h-screen h-[200rem]">
                <div className="xl:grid xl:grid-cols-4 ">
                    <div className="flex flex-row p-4 pl-10 gap-3 h-[7rem] justify-start items-center">
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

                    <SlideBox>
                        <DimoSlider />
                    </SlideBox>

                    <Box>
                        <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                            <div className=" flex flex-col h-[44rem]">
                                <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                    <DimoFilter />
                                </div>
                            </div>
                        </div>
                    </Box>

                    <div className="w-full xl:row-start-3 xl:col-start-2 xl:col-end-5">
                        <div className="w-full h-[200rem]">
                            <DimoList />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    {/* <DimoCategory list={b} />
        </div>
        <div className="grid grid-cols-4">
          <div className="md:ml-28 mt-4 w-40 h-[112.5rem] ">
            <DimoPage list={b} />
          </div>
          <div className="col-start-2 col-end-5">
            <DimoAllList list={c} />
          </div> */}
                </div>
            </div>
        </>
    );
};

export default Dimo;
