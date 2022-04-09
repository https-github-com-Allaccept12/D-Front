import React, { useEffect, useState } from "react";
import {
    Button,
    ButtonWithCount,
    Label,
    Profile,
    Title,
    Text,
    Answer,
    Subtitle,
    Icon,
    PageLoadSpinner,
} from "../../../elements";
import { CommentDimo } from "../../Comment";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import tw from "tailwind-styled-components";
import { useToggle, useInput } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
    dimoInfoDetailLoad,
    CreateInfoDimo,
    likeDimoInfo,
    dislikeDimoInfo,
    bookmarkAdd,
    bookmarkRemove,
    deleteDimo,
} from "../../../redux/modules/dimo";
import { requestFollow, requestUnFollow } from "../../../redux/modules/user";

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
    const currentUrl = window.location.href;
    const dimo = useSelector((state) => state.dimo?.detailDimoInfo);
    const dimos = useSelector((state) => state.dimo?.detailDimoInfo?.postSubDetail);
    // const myProfileImg = sessionStorage.getItem("profile_img");

    let location = useLocation();
    let navigate = useNavigate();
    // const navigate = useNavigate();
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
    }
    // const profile = sessionStorage.getItem("profile_img");
    let owner_account_id = dimos?.account_id;
    const visitor_account_id = account_id;

    const post_id = location?.state?.post_id;

    // const post_id = match.params.name;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dimoInfoDetailLoad({ post_id, dispatch, visitor_account_id }));
    }, []);

    const [showAnswer, setShowAnswer] = useToggle();
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);

    // console.log(owner_account_id);
    const commentSubmit = () => {
        if (account_id === 0) {
            return alert("로그인하면 댓글을 남길수 있어요!");
        }
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
        if (account_id === 0) {
            Swal.fire({
                icon: "info",
                title: "로그인해주세요!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
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
        if (account_id === 0) {
            Swal.fire({
                icon: "info",
                title: "로그인해주세요!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
        if (owner_account_id == visitor_account_id) {
            Swal.fire({
                icon: "error",
                title: "내가 작성한 글은 스크랩 할수 없어요!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
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

    const [follow, setFollow] = useState(dimo?.is_follow);
    const [barFollow, setBarFollow] = useState();

    const clickFollow = () => {
        if (account_id === 0) {
            Swal.fire({
                icon: "info",
                title: "로그인해주세요!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
        if (owner_account_id == visitor_account_id) {
            Swal.fire({
                icon: "error",
                title: "자신은 팔로우할 수 없습니다",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
        setFollow(!follow);
        setBarFollow(!barFollow);
        if (follow) {
            dispatch(requestUnFollow(visitor_account_id));
            Swal.fire({
                icon: "success",
                title: "언팔로우되었습니다!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        } else {
            dispatch(requestFollow(visitor_account_id));
            Swal.fire({
                icon: "success",
                title: "팔로우되었습니다!",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
    };

    const clickProfile = () => {
        // console.log("click accountid", barAccountId);
        navigate(`/myspace/myprofile/${owner_account_id}`);
    };

    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 100);
    }, []);
    return (
        <>
            {time === true ? (
                <PageLoadSpinner />
            ) : (
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
                                <div className="flex flex-row gap-1 pb-4 md:pt-10">
                                    {dimo
                                        ? dimo?.hash_tag.map((value, idx) => {
                                              return <Label key={idx}>{value?.tag}</Label>;
                                          })
                                        : ""}
                                </div>
                                <Title size="5">{dimos?.title}</Title>
                                <div className="flex flex-row py-3">
                                    <Text size="1">{dimos?.create_time.split("T")[0]}</Text>
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
                                    <div className="flex flex-col gap-3 2xl:flex-row">
                                        {is_like ? (
                                            <ButtonWithCount
                                                icon
                                                name="HeartF"
                                                iconColor="heart"
                                                color="5"
                                                size="3"
                                                count={like_cnt}
                                                onClick={cancelLike}
                                            >
                                                <span className="hidden 2xl:contents">좋아요</span>
                                            </ButtonWithCount>
                                        ) : (
                                            <ButtonWithCount
                                                icon
                                                name="HeartE"
                                                color="4"
                                                size="3"
                                                count={like_cnt}
                                                onClick={addLike}
                                            >
                                                <span className="hidden 2xl:contents">좋아요</span>
                                            </ButtonWithCount>
                                        )}
                                        {is_bookmark ? (
                                            <ButtonWithCount
                                                icon
                                                name="BookmarkF"
                                                iconColor="book"
                                                color="5"
                                                size="3"
                                                count={book_cnt}
                                                onClick={cancelBook}
                                            >
                                                <span className="hidden 2xl:contents">스크랩</span>
                                            </ButtonWithCount>
                                        ) : (
                                            <ButtonWithCount
                                                icon
                                                name="BookmarkE"
                                                color="4"
                                                size="3"
                                                count={book_cnt}
                                                onClick={addBook}
                                            >
                                                <span className="hidden 2xl:contents">스크랩</span>
                                            </ButtonWithCount>
                                        )}
                                        <CopyToClipboard text={currentUrl}>
                                            <Button
                                                icon
                                                name="Link"
                                                color="5"
                                                size="3"
                                                onClick={() =>
                                                    Swal.fire({
                                                        icon: "success",
                                                        title: "클립보드에 복사됐습니다.",
                                                        showConfirmButton: false,
                                                        timer: 1000,
                                                    })
                                                }
                                            >
                                                공유<span className="hidden xl:contents">하기</span>
                                            </Button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </Btns>

                            <UnderLine />
                            <Footer>
                                <div className="flex flex-row justify-start">
                                    <Profile
                                        size="5"
                                        src={dimos.account_profile_img}
                                        className="hidden md:flex cursor-pointer"
                                        onClick={clickProfile}
                                    />
                                    <div className="ml-3 -mt-2">
                                        <Title size="5" className="my-3">
                                            {dimos.account_nickname}
                                        </Title>
                                    </div>
                                </div>
                                {!dimo.is_follow ? (
                                    <Button size="3" color="1" onClick={clickFollow}>
                                        팔로우 🎉
                                    </Button>
                                ) : (
                                    <Button size="3" color="4" onClick={clickFollow}>
                                        팔로잉
                                    </Button>
                                )}
                            </Footer>
                        </Card>
                        <UnderLine />

                        <div className="flex flex-row font-min1">
                            <Icon name="Talk" iconSize="32" />
                            <span className="pl-2 mb-1 text-xl">댓글 {dimo?.comment_count}개</span>
                        </div>

                        <Card>
                            <Btns>
                                <div className="flex p-5 mt-20 rounded-md bg-dgray-200 ">
                                    <div>
                                        <Subtitle size="2" className="hidden lg:flex">
                                            댓글쓰기
                                        </Subtitle>
                                    </div>
                                    <div className="w-full mt-12 ml-auto lg:w-11/12">
                                        <Answer
                                            value={name.value}
                                            onChange={name.onChange}
                                            textarea
                                            is_submit
                                            onSubmit={commentSubmit}
                                            cardsize="2"
                                            width="20"
                                        />
                                        <Button size="3" className="visible mt-4 xl:invisible" onClick={commentSubmit}>
                                            제출
                                        </Button>
                                    </div>
                                </div>
                            </Btns>
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
                        <UnderLine />
                    </Bg>
                </>
            )}
        </>
    );
};
export default DimoSharedDetail;
