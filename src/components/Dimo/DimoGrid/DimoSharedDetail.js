import React, { useEffect, useState } from "react";
import { Button, Label, Profile, Title, Text, Answer, InputNoTitle, Icon } from "../../../elements";
import { CommentDimo } from "../../Comment";
import { useNavigate, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useToggle, useInput } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
    dimoInfoDetailLoad,
    CreateInfoDimo,
    likeDimoInfo,
    dislikeDimoInfo,
    bookmarkAdd,
    bookmarkRemove,
    deleteDimo,
} from "../../../redux/modules/dimo";

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

const MyBtn = tw.button`
    font-min1 text-tiny text-dpurple-200 hover:text-dpurple-300 mr-1
`;

const DimoSharedDetail = () => {
    let location = useLocation();
    let navigate = useNavigate();
    // const navigate = useNavigate();

    const post_id = location.state.post_id;
    console.log(post_id);
    // const post_id = match.params.name;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dimoInfoDetailLoad({ post_id, dispatch, visitor_account_id }));
    }, []);

    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);

    const dimo = useSelector((state) => state.dimo.detailDimoInfo);
    const dimos = useSelector((state) => state.dimo.detailDimoInfo?.postSubDetail);
    console.log(dimos);

    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
    }

    let owner_account_id = dimos?.account_id;
    const visitor_account_id = account_id;
    // console.log(owner_account_id);
    const commentSubmit = () => {
        const content = name.value;
        const data = { post_id, content };

        dispatch(CreateInfoDimo(data));
        navigate(`/dimo/info/uiux`, { replace: true });
    };

    const ClickDelete = () => {
        const board = `INFO`;
        const category = dimos?.category;
        dispatch(deleteDimo({ post_id, category, board }));
        navigate("/dimo/info", { replace: true });
    };

    const [like_cnt, setLikeCnt] = useState(dimos?.like_count);
    const [is_like, setIsLike] = useState(dimo?.is_like);
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

    const [book_cnt, setBookCnt] = useState(dimo?.bookmark_count);
    const [is_bookmark, setIsBookmark] = useState(dimo?.is_bookmark);

    const cancelBook = () => {
        setIsBookmark(false);
        setBookCnt(book_cnt - 1);
        dispatch(bookmarkRemove(post_id));
    };

    const addBook = () => {
        setIsBookmark(true);
        setBookCnt(book_cnt + 1);
        dispatch(bookmarkAdd(post_id));
    };

    const goToEdit = () => {
        navigate(`/dimo/create/edits/${post_id}`, {
            state: {
                isedit: true,
                post_id: post_id,
                board: "INFO",
            },
        });
    };

    const makeFollow = () => {
        const account_id = { account_id: visitor_account_id };
        setIsfow();
        dispatch(requestFollow(account_id));
    };
    return (
        <>
            <Bg>
                <Card>
                    {owner_account_id == visitor_account_id ? (
                        <>
                            <MyBtn onClick={goToEdit}>수정</MyBtn>
                            <MyBtn onClick={ClickDelete}>삭제</MyBtn>
                        </>
                    ) : (
                        " "
                    )}
                    <Header>
                        <div className="flex flex-row gap-1 md:pt-10 pb-4">
                            {dimo
                                ? dimo?.hash_tag.map((value, idx) => {
                                      return <Label key={idx}>{value?.tag}</Label>;
                                  })
                                : ""}
                        </div>
                        <Title size="5">{dimos?.title}</Title>
                        <div className="flex flex-row py-3">
                            <Text size="1">{dimos?.create_time}</Text>
                            <InnerLine />
                            <Text size="1">조회수 {dimos?.view_count}</Text>
                        </div>
                    </Header>
                    <Body>
                        <Text size="2" className="flex flex-wrap w-full pt-4 pb-16">
                            {dimos?.content}
                        </Text>
                    </Body>
                    <Btns>
                        <div className="flex flex-row justify-between">
                            <Button size="3" onClick={setShowAnswer} className="invisible">
                                답변남기기
                            </Button>
                            <div className="flex flex-col md:flex-row gap-3">
                                {is_like ? (
                                    <Button icon name="HeartF" color="5" size="3" count={like_cnt} onClick={cancelLike}>
                                        <span className="hidden 2xl:contents">좋아요</span>
                                    </Button>
                                ) : (
                                    <Button icon name="HeartE" color="4" size="3" count={like_cnt} onClick={addLike}>
                                        <span className="hidden 2xl:contents">ddd좋아요</span>
                                    </Button>
                                )}

                                {is_bookmark ? (
                                    <Button
                                        icon
                                        name="BookmarkF"
                                        color="5"
                                        size="3"
                                        count={book_cnt}
                                        onClick={cancelBook}
                                    >
                                        <span className="hidden 2xl:contents">스크랩</span>
                                    </Button>
                                ) : (
                                    <Button icon name="BookmarkE" color="5" size="3" count={book_cnt} onClick={addBook}>
                                        <span className="hidden 2xl:contents">스크랩</span>
                                    </Button>
                                )}
                                <Button icon name="Link" color="5" size="3">
                                    공유<span className="hidden xl:contents">하기</span>
                                </Button>
                            </div>
                        </div>
                    </Btns>
                </Card>
                <UnderLine />

                <div className="flex flex-row font-min1">
                    <Icon name="Talk" iconSize="32" />
                    <span className="text-xl mb-1 pl-2">댓글 {dimo?.comment_count}개</span>
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
                            <Button size="3" className="xl:invisible visible mt-4" onClick={commentSubmit}>
                                제출
                            </Button>
                        </div>
                    </div>
                    <div className="p-4">
                        {dimo?.comment_count && dimo?.comment_count > 0
                            ? dimo?.comment.map((value) => {
                                  return (
                                      <div key={value?.comment_id}>
                                          <CommentDimo
                                              account_id={value?.account_id}
                                              account_nickname={value?.nickname}
                                              account_profile_img={value?.profile_img}
                                              comment_id={value?.comment_id}
                                              content={value?.content}
                                              is_comment_like={value?.is_comment_like}
                                              like_count={value?.like_count}
                                              modify_time={value?.modify_time}
                                          />
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </Card>
            </Bg>
        </>
    );
};

export default DimoSharedDetail;
