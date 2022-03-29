import React from "react";
import { Button, Title, InputNoTitle, Hashtag, Subtitle, SelectBoxCategory, Text } from "../../elements";

import { useHistory, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";

const Grid = tw.div`
bg-gray-100 h-full xl:p-10
`;

const Body = tw.div`
md:w-4/5 flex mx-auto flex-col pt-20
`;

const InnerGrid = tw.div`
w-full bg-white
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
                            <div className="grid grid-cols-2 p-8 gap-4">
                                <SelectBoxCategory />
                                <Hashtag />
                            </div>
                            <div className="px-8 flex flex-col gap-7">
                                <InputNoTitle placeholder="제목" />
                                <InputNoTitle cardSize="3" textarea maxLen="80" placeholder="내용" />
                            </div>
                            <div className="p-8">
                                <div className="bg-white p-10 border border-dpurple-200 border-dashed mx-auto">
                                    <div className="flex justify-center items-center flex-col">
                                        <Button size="2" color="4" icon name="Plus">
                                            추가하기
                                        </Button>
                                        <Text size="3" className="pt-10 pb-7">
                                            파일추가 파일은 복수로 첨부가능하며 최대 100mb까지 업로드됩니다.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2">등록하기</Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
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

                        <InnerGrid>
                            <div className="grid grid-cols-2 p-8 gap-4">
                                <SelectBoxCategory />
                                <Hashtag />
                            </div>
                            <div className="px-8 flex flex-col gap-7">
                                <InputNoTitle placeholder="제목" />
                                <InputNoTitle cardSize="3" textarea maxLen="80" placeholder="내용" />
                            </div>
                            <div className="p-8">
                                <div className="bg-white p-10 border border-dpurple-200 border-dashed mx-auto">
                                    <div className="flex justify-center items-center flex-col">
                                        <Button size="2" color="4" icon name="Plus">
                                            추가하기
                                        </Button>
                                        <Text size="3" className="pt-10 pb-7">
                                            파일추가 파일은 복수로 첨부가능하며 최대 100mb까지 업로드됩니다.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2">등록하기</Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );
    else return null;
};

export default DimoCreate;
