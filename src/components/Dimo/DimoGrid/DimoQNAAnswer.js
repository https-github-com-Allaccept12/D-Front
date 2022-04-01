import React from "react";
import { Button, Subtitle, Profile, Title, Text, FollowBtn, InputNoTitle } from "../../../elements";
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
w-full mt-10 rounded-lg border border-dgray-200 bg-white sm:px-28 p-3 pb-10
${(props) => (props.selected == "true" ? `border-2 border-dpurple-300` : "")};
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
    const { selected, followed } = props;
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
            <Card selected={selected}>
                <Footer>
                    <div className="justify-start flex flex-row">
                        <Profile
                            size="5"
                            src="http://kids.donga.com/www/data/news/201408/2014080726.jpg"
                            className="hidden md:flex"
                        />
                        <div className="-mt-2 ml-3">
                            <Title size="5" className="my-3">
                                이름dfsfs
                            </Title>
                            <div className="flex flex-col">
                                <Subtitle size="2">
                                    채택받은 답변 수 <span className="text-blue-300"> 100</span>
                                </Subtitle>
                                <Subtitle size="2">
                                    관심 분야<span className="text-blue-300"> UI/UX</span>
                                </Subtitle>
                            </div>
                        </div>
                    </div>
                    <FollowBtn size="2" color="1" followed={followed} />
                </Footer>
                <UnderLine />
                <Header>
                    <div className="flex flex-row py-3">
                        <Text size="1">2022.07.17</Text>
                        <InnerLine />
                        <Text size="1">조회수 2천</Text>
                        <InnerLine />
                        {selected && <Text size="1">채택완료</Text>}
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
                            답글 달기
                        </Button>
                        <div className="flex flex-row space-x-4">
                            <Button icon name="HeartE" color="5" size="3" count="8">
                                <span className="hidden 2xl:contents">좋아요</span>
                            </Button>
                        </div>
                    </div>
                </Btns>

                {showAnswer && (
                    <>
                        <UnderLine />
                        <div className="bg-white flex p-5 xl:px-10 2xl:px-20 gap-3">
                            <div>
                                <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" />
                            </div>
                            <div className="w-full ml-auto">
                                <InputNoTitle
                                    value={name.value}
                                    onChange={name.onChange}
                                    is_error={name.errors}
                                    is_value={name.value.length}
                                    cardsize="1"
                                    maxlen="30"
                                    width="2"
                                    is_submit
                                    onSubmit={commentSubmit}
                                />
                                <Button size="3" className="lg:invisible visible">
                                    제출
                                </Button>
                            </div>
                        </div>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </>
                )}
            </Card>
        </>
    );
};

export default DimoQNAAnswer;
