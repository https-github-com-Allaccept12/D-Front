import React from "react";
import { Button, Label, Profile, Title, Text, Answer, InputNoTitle, Icon } from "../../../elements";
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

const Bg = tw.div`
bg-dgray-200 md:p-10 xl:px-20
`;

const DimoSharedDetail = (props) => {
    const history = useHistory();
    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);
    const commentSubmit = () => {
        const data = { comment: name.value };
        history.goBack();
        //여기에 뭔가 돌아가기버튼...
    };
    return (
        <>
            <Bg>
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
                            안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이
                            되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게
                            되었습니다. 안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이
                            아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을
                            올리게 되었습니다. 안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다.
                            다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을
                            얻고자 글을 올리게 되었습니다. 안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년
                            학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의
                            의견을 얻고자 글을 올리게 되었습니다.
                        </Text>
                    </Body>
                    <Btns>
                        <div className="flex flex-row justify-between">
                            <Button size="3" onClick={setShowAnswer} className="invisible">
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
                </Card>
                <UnderLine />

                <div className="flex flex-row font-min1">
                    <Icon name="Talk" iconSize="32" /> <span className="text-xl mb-1 pl-2">댓글 7개</span>
                </div>

                <Card>
                    <div className="bg-dgray-200 rounded-md flex p-5 xl:px-10 2xl:px-20 mt-20">
                        <div>
                            <Title size="6" className="hidden lg:flex">
                                댓글 남기기
                            </Title>
                            <Profile
                                size="5"
                                src="http://kids.donga.com/www/data/news/201408/2014080726.jpg"
                                className="hidden lg:flex"
                            />
                        </div>
                        <div className="w-full lg:w-11/12 ml-auto mt-12">
                            <Answer
                                value={name.value}
                                onChange={name.onChange}
                                textarea
                                is_submit
                                onSubmit={commentSubmit}
                                cardsize="2"
                                width="20"
                            />
                            <Button size="3" className="xl:invisible visible mt-4">
                                제출
                            </Button>
                        </div>
                    </div>
                    <div className="p-4">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </Card>
            </Bg>
        </>
    );
};

export default DimoSharedDetail;
