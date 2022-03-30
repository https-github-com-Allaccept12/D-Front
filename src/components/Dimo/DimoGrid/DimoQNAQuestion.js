import React from "react";
import { Button, Label, Profile, Title, Text, Subtitle, InputNoTitle, FollowBtn } from "../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle, useInput } from "../../../hooks";

const UnderLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;

const InnerLine = tw.hr`
border h-4 mx-3 mt-1 text-dgray-300
`;

const Card = tw.div`
w-full mt-10 rounded-lg border border-dgray-200 bg-white sm:px-28 p-3
`;

const Header = tw.div`

`;

const Body = tw.div`

`;

const Btns = tw.div`

`;

const Footer = tw.div`
py-10 flex flex-row justify-between
`;

const DimoQNAQuestion = (props) => {
    const { followed } = props;
    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    return (
        <>
            <Card>
                <Header>
                    <div className="flex flex-row gap-1 md:pt-10 pb-4">
                        <Label size="2" color="4">
                            UI/UX
                        </Label>
                        <Label size="2" color="5">
                            진로고민
                        </Label>
                    </div>
                    <Title size="5">UI/UX 취업 관련 질문입니다</Title>
                    <div className="flex flex-row py-3">
                        <Text size="1">2022.07.17</Text>
                        <InnerLine />
                        <Text size="1">조회수 2천</Text>
                        <InnerLine />
                        <Text size="1">채택완료</Text>
                    </div>
                </Header>
                <Body>
                    <Text size="2" className="flex flex-wrap w-full pt-4 pb-16">
                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며
                        제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다.
                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며
                        제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다.
                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며
                        제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다.
                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며
                        제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다.
                    </Text>
                </Body>
                <Btns>
                    <div className="flex flex-row justify-between">
                        <Button size="3" onClick={setShowAnswer}>
                            답변남기기
                        </Button>
                        <div className="flex flex-col md:flex-row gap-3">
                            <Button icon name="HeartE" color="5" size="3" count="8">
                                <span className="hidden 2xl:contents">좋아요</span>
                            </Button>
                            <Button icon name="BookmarkE" color="5" size="3" count="8">
                                <span className="hidden 2xl:contents">스크랩</span>
                            </Button>
                            <Button icon name="Link" color="5" size="3">
                                공유<span className="hidden xl:contents">하기</span>
                            </Button>
                        </div>
                    </div>
                </Btns>

                <UnderLine />

                <Footer>
                    <div className="justify-start flex flex-row">
                        <Profile size="5" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                        <div className="-mt-2 ml-3">
                            <Title size="5" className="my-3">
                                이름dfsfsdfsfsfsf
                            </Title>
                            <Subtitle size="1">
                                채택률<span className="text-blue-300">100 %</span> / 마감률{" "}
                                <span className="text-blue-300">100 %</span>
                            </Subtitle>
                        </div>
                    </div>
                    <FollowBtn size="2" color="1" followed={followed} />
                </Footer>
            </Card>
            {showAnswer && (
                <>
                    <div className="bg-dgray-300 flex p-5 xl:px-10 2xl:px-20 mt-20">
                        <div>
                            <Title size="5">답변 남기기</Title>
                            <Profile size="5" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                        </div>
                        <div className="w-4/5 ml-auto mt-12">
                            <InputNoTitle
                                value={name.value}
                                onChange={name.onChange}
                                is_error={name.errors}
                                is_value={name.value.length}
                                textarea
                                cardSize="3"
                                maxLen="30"
                                width="2"
                            />
                            <Button size="3">제출</Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DimoQNAQuestion;
