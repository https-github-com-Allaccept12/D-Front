import React from "react";
import { Button, Title, Input, Hashtag, Subtitle, SelectBox, Text } from "../../elements";

import { useHistory, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const Grid = tw.div`
bg-gray-100 h-screen
`;

const Body = tw.div`
md:w-4/5 flex mx-auto flex-col pt-20
`;

const InnerGrid = tw.div`
w-3/4
`;

const DimoCreate = () => {
    const location = useLocation();
    const history = useHistory();
    const a = location.pathname;

    const status = a.split("/")[3];

    if (status === "qna")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">질문하기</Title>
                        <Subtitle size="1">디자이너님들에게 질문해보세요! 멋진 정보를 얻을 수 있을거에요!</Subtitle>

                        <InnerGrid>
                            크리에이트 디모 QnA
                            <div className="flex flex-row w-4/5 max-w-[56.25rem] mx-auto gap-5">
                                <SelectBox />
                                <Hashtag />
                            </div>
                            <div className=" w-full flex flex-col gap-4 pt-5">
                                <Input placeholder="제목" />
                                <Input textarea maxLen="80" placeholder="내용" />
                            </div>
                            =
                            <div className="bg-white p-10 border border-dpurple-200 border-dashed w-4/5 mx-auto max-w-[56.25rem] ">
                                <div className="flex justify-center items-center flex-col">
                                    <Button size="2">추가하기</Button>
                                    <Text size="3" className="pt-10 pb-7">
                                        파일추가 파일은 복수로 첨부가능하며 최대 100mb까지 업로드됩니다.
                                    </Text>
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10">
                                <Button size="2">입력 완료!</Button>
                                <Button
                                    size="2"
                                    onClick={() => {
                                        history.goBack();
                                    }}
                                >
                                    돌아가기!
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
                <div className="bg-gray-100 h-20"></div>
            </>
        );

    if (status === "shared")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">정보공유하기</Title>
                        <Subtitle size="1">
                            알고 계신 정보를 공유해주세요! 다른 디자이너분들께 큰 도움이 될 거에요!
                        </Subtitle>
                        <div className="bg-white">
                            <div className="w-full ">
                                크리에이트 디모 QnA
                                <div className="flex flex-row w-4/5 max-w-[56.25rem] mx-auto gap-5">
                                    <SelectBox />
                                    <Hashtag />
                                </div>
                                <div className=" w-full flex flex-col gap-4 pt-5">
                                    <Input placeholder="제목" />
                                    <Input textarea maxLen="80" placeholder="내용" />
                                </div>
                            </div>

                            <div className="bg-white p-10 border border-dpurple-200 border-dashed w-4/5 mx-auto max-w-[56.25rem] ">
                                <div className="flex justify-center items-center flex-col">
                                    <Button size="2">추가하기</Button>
                                    <Text size="3" className="pt-10 pb-7">
                                        파일추가 파일은 복수로 첨부가능하며 최대 100mb까지 업로드됩니다.
                                    </Text>
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10">
                                <Button size="2">입력 완료!</Button>
                                <Button
                                    size="2"
                                    onClick={() => {
                                        history.goBack();
                                    }}
                                >
                                    돌아가기!
                                </Button>
                            </div>
                        </div>
                    </Body>
                </Grid>
                <div className="bg-gray-100 h-20"></div>
            </>
        );
    else return null;
};

export default DimoCreate;
