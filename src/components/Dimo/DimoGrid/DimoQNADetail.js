import React from "react";
import { Button, Label, Title, Text, Input, Profile, HeartButton } from "../../../elements";

import { useHistory } from "react-router-dom";
import { Comment } from "../../Comment";
import DimoPost from "./DimoPost";
import DimoQNAQuestion from "./DimoQNAQuestion";
import DimoQNAAnswer from "./DimoQNAAnswer";
import tw from "tailwind-styled-components";

const Box = tw.div`
w-full 
`;

const Grid = tw.div`
w-full xl:w-5/6  p-3 sm:p-10 ml-auto
`;

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5

`;

const DimoQNADetail = (props) => {
    let history = useHistory();
    return (
        <>
            <div className="xl:grid xl:grid-cols-4 bg-dgray-200 h-full">
                <div className="col-start-4 col-span-2 xl:grid grid-rows-6 ">
                    <div className="top-28 h-full invisible fixed 2xl:visible 2xl:absolute">
                        <div className=" flex flex-col">
                            <div className="flex flex-row justify-end items-end self-end">
                                <div className="row-start-1 ">
                                    <Title size="4" className="mt-10 md:mt-28 mb-3 ml-1">
                                        유사한 질문
                                    </Title>
                                    <div className="flex flex-col gap-5 h-fit">
                                        <DimoPost list="qna" />
                                        <DimoPost list="qna" />
                                        <DimoPost list="qna" />
                                        <DimoPost list="qna" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-4 row-start-1 col-span-full">
                    <Box>
                        <Grid>
                            <DimoQNAQuestion />
                            <InnerLine />
                            <Title size="3">답변 2개</Title>
                            <DimoQNAAnswer selected="true" />
                            <DimoQNAAnswer />
                        </Grid>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default DimoQNADetail;
