import React, { useState } from "react";
import { Button, Label, Profile, Title, Text, Subtitle, InputNoTitle, FollowBtn, Answer } from "../../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToggle, useInput } from "../../../hooks";
import { CreateAnswerDimo } from "../../../redux/modules/dimo";
import { detailDimoQna, deleteDimo, likeDimoInfo, dislikeDimoInfo } from "../../../redux/modules/dimo";
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
    const { followed, value, post } = props;
    const location = useLocation();
    const a = location.pathname;
    const post_id = a.split("/")[3];

    // const post_id = post.post_id;

    const dispatch = useDispatch();

    const history = useHistory();
    const [showAnswer, setShowAnswer] = useToggle();
    const [contentValue, setContentValue] = useState();

    const [commentContent, setContent] = useState("");
    const [modifyDiv, setModifyDiv] = useState(false);
    // const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", []);

    const modify = useInput("", []);
    // const t = value.hash_tag;
    // console.log(post.post_id);
    const answerSubmit = () => {
        const content = name.value;

        const data = { post_id, content };

        dispatch(CreateAnswerDimo(data));
        // history.goBack();
        //여기에 뭔가 돌아가기버튼...
    };

    const ClickDelete = () => {
        const board = `QNA`;
        const category = post.category;
        dispatch(deleteDimo({ post_id, category, board }));
        history.replace("/dimo/qna");
    };

    // const modifyQuestion = () => {
    //     const content = name.value;
    //     const data = { content: content };
    //     console.log(content);
    //     dispatch(modifyQuestionDimo({ comment_id, data }));
    //     setContentValue(content);
    //     setContent(content);
    //     setModifyDiv(!modifyDiv);
    // };

    const [like_cnt, setLikeCnt] = useState(post?.like_count);
    const [is_like, setIsLike] = useState(post?.is_like);
    const cancelLike = () => {
        setIsLike(false);
        setLikeCnt(like_cnt - 1);
        dispatch(dislikeDimoInfo(post_id));
    };

    const addLike = () => {
        setIsLike(true);
        setLikeCnt(like_cnt + 1);
        dispatch(likeDimoInfo(post_id));
    };

    return (
        <>
            <Card>
                <Header>
                    <div className="flex flex-row gap-1 md:pt-10 pb-4">
                        {value
                            ? value.hash_tag.map((value, idx) => {
                                  return <Label key={idx}>{value?.tag}</Label>;
                              })
                            : ""}
                    </div>
                    <button onClick={ClickDelete}>삭제</button>
                    <Title size="5">{post?.title}</Title>
                    <div className="flex flex-row py-3">
                        <Text size="1">{post?.modify_time}</Text>
                        <InnerLine />
                        <Text size="1">조회수 {post?.view_count}</Text>
                        <InnerLine />
                        {post?.is_selected && <Text size="1">채택완료</Text>}
                    </div>
                </Header>
                <Body>
                    <Text size="2" className="flex flex-wrap w-full pt-4 pb-16">
                        {post?.content}
                    </Text>
                </Body>
                <Btns>
                    <div className="flex flex-row justify-between gap-2">
                        <Button size="3" onClick={setShowAnswer}>
                            <span className="">답변남기기</span>
                        </Button>
                        <div className="flex flex-col xl:flex-row gap-3">
                            {is_like == "true" ? (
                                <Button icon name="HeartF" color="5" size="3" count={like_cnt} onClick={cancelLike}>
                                    <span className="hidden 2xl:contents">좋아요</span>
                                </Button>
                            ) : (
                                <Button icon name="HeartE" color="4" size="3" count={like_cnt} onClick={addLike}>
                                    <span className="hidden 2xl:contents">ddd좋아요</span>
                                </Button>
                            )}
                            {/* 
                            {is_bookmark ? (
                                <Button icon name="BookmarkE" color="5" size="3" count={book_cnt} onClick={cancelBook}>
                                    <span className="hidden 2xl:contents">스크랩</span>
                                </Button>
                            ) : (
                                <Button icon name="BookmarkF" color="5" size="3" count={book_cnt} onClick={addBook}>
                                    <span className="hidden 2xl:contents">스크랩</span>
                                </Button>
                            )} */}

                            <Button icon name="Link" color="5" size="3">
                                공유<span className="hidden xl:contents">하기</span>
                            </Button>
                        </div>
                    </div>
                </Btns>

                <UnderLine />

                <Footer>
                    <div className="justify-start flex flex-row">
                        <Profile size="5" src={post?.account_profile_img} className="hidden md:flex" />
                        <div className="-mt-2 ml-3">
                            <Title size="5" className="my-3">
                                {post?.account_nickname}
                            </Title>
                            <Subtitle size="1">
                                채택률<span className="text-blue-300">100 %</span> / 마감률
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
                            <Title size="6" className="hidden lg:flex">
                                답변 남기기
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
                                onSubmit={answerSubmit}
                                cardsize="3"
                                width="20"
                            />
                            <Button size="3" className="xl:invisible visible mt-4" onClick={answerSubmit}>
                                제출
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DimoQNAQuestion;
