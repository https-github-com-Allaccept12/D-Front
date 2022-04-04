import React, { useEffect } from "react";
import { Button, Label, Profile, Title, Text, Answer, InputNoTitle, Icon } from "../../../elements";
import { CommentDimo } from "../../Comment";
import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle, useInput } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { dimoInfoDetailLoad, CreateInfoDimo } from "../../../redux/modules/dimo";

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

const DimoSharedDetail = ({ history, location, match }) => {
    const post_id = match.params.name;
    const dispatch = useDispatch();
    const [loading, setLoading] = useToggle();
    useEffect(() => {
        dispatch(dimoInfoDetailLoad({ post_id, dispatch }));
    }, [useSelector]);

    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);

    const dimos = useSelector((state) => state.dimo.detailDimoInfo.postSubDetail);
    console.log(dimos);

    const commentSubmit = () => {
        const content = name.value;
        const data = { post_id, content };

        dispatch(CreateInfoDimo(data));
        // history.goBack();
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
                        <Title size="5">{dimos.title}</Title>
                        <div className="flex flex-row py-3">
                            <Text size="1">{dimos.create_time}</Text>
                            <InnerLine />
                            <Text size="1">조회수 {dimos.view_count}</Text>
                        </div>
                    </Header>
                    <Body>
                        <Text size="2" className="flex flex-wrap w-full pt-4 pb-16">
                            {dimos.content}
                        </Text>
                    </Body>
                    <Btns>
                        <div className="flex flex-row justify-between">
                            <Button size="3" onClick={setShowAnswer} className="invisible">
                                답변남기기
                            </Button>
                            <div className="flex flex-col md:flex-row gap-3">
                                <Button icon name="HeartE" color="5" size="3" count={dimos.like_count}>
                                    <span className="hidden 2xl:contents">좋아요</span>
                                </Button>
                                <Button icon name="BookmarkE" color="5" size="3" count={dimos.bookmark_count}>
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
                    <Icon name="Talk" iconSize="32" />{" "}
                    <span className="text-xl mb-1 pl-2">댓글 {dimos.comment_count}개</span>
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
                    <div className="p-4">{/* <CommentDimo value={dimos.comment} /> */}</div>
                </Card>
            </Bg>
        </>
    );
};

export default DimoSharedDetail;
