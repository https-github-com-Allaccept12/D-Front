import React from "react";
import { Button, Label, Profile, Title, Text, HeartButton, Input } from "../../../elements";
import { Comment } from "../../Comment";
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

const DimoQNAAnswer = (props) => {
    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    return (
        <>
            <Card>
                <Footer>
                    <div className="justify-start flex flex-row">
                        <Profile size="5" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                        <div>
                            <Title>이름</Title>
                            <Title>채택률 마감률</Title>
                        </div>
                    </div>
                    <Button>팔로우</Button>
                </Footer>
                <UnderLine />
                <Header>
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
                            답글남기기
                        </Button>
                        <div className="flex flex-row space-x-4">
                            <HeartButton like_cnt="0" is_like />
                            <HeartButton like_cnt="1" is_like />
                        </div>
                    </div>
                </Btns>
            </Card>
            {showAnswer && (
                <>
                    <div className=" bg-white relative">
                        <div className="pt-10 absolute">
                            <Title>답변 남기기</Title>
                            <Profile size="5" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                        </div>
                        <Input
                            value={name.value}
                            onChange={name.onChange}
                            is_error={name.errors}
                            is_value={name.value.length}
                            textarea
                            cardSize="2"
                            maxLen="30"
                        />
                    </div>
                    <Comment />
                </>
            )}
        </>
    );
};

export default DimoQNAAnswer;
