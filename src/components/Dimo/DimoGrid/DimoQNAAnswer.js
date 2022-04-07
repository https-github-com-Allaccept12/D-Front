import React, { useState, useEffect } from "react";
import { Button, Subtitle, Profile, Title, Text, FollowBtn, InputNoTitle, ButtonWithCount } from "../../../elements";
import { Comment } from "../../Comment";
import { useNavigate, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToggle, useInput } from "../../../hooks";
import { deleteAnswerDimo, editAnswerDimo, selectAnswerDimo, likeDimoInfo } from "../../../redux/modules/dimo";
import { requestFollow, requestUnFollow } from "../../../redux/modules/user";

const UnderLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10 mb-5
`;

const InnerLine = tw.hr`
border h-4 mx-3 mt-1 text-dgray-300
`;

const Card = tw.div`
w-full mt-10 rounded-lg border border-dgray-200 bg-white sm:px-28 p-3 pb-10
${(props) => (props.is_selected == true ? `border-2 border-dpurple-300` : "")};
`;

const Header = tw.div`

`;

const Body = tw.div`

`;

const Btns = tw.div`

`;

const MyBtn = tw.button`
    font-min1 text-tiny text-dpurple-200 hover:text-dpurple-300 mr-1
`;

const Footer = tw.div`
py-10 flex flex-row justify-between
`;

const DimoQNAAnswer = (props) => {
    const dimosdetail = useSelector((state) => state.dimo.detaildimoQna?.postAnswerSubDetail);
    const {
        selected,
        account_id,
        account_nickname,
        account_profile_img,
        answer_id,
        content,
        is_follow,
        is_like,
        is_selected,
        like_count,
        modify_time,
    } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useToggle();

    const [contentValue, setContentValue] = useState(content);
    const [commentContent, setContent] = useState("");
    const [modifyDiv, setModifyDiv] = useState(false);

    const name = useInput("", []);
    let a_id = "";
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        a_id = id_cookie;
    }
    let visitor_account_id = dimosdetail.account_id;
    let owner_account_id = a_id;
    // console.log(visitor_account_id);
    const ClickDelete = () => {
        dispatch(deleteAnswerDimo(answer_id));
        navigate("/dimo/qna");
    };

    useEffect(() => {
        setContent(contentValue);
    }, [contentValue]);

    const openModify = () => {
        setModifyDiv(!modifyDiv);
    };

    const modifyComment = () => {
        const content = name.value;
        const data = { content: content };
        // console.log(content);
        dispatch(editAnswerDimo({ answer_id, data }));
        setContentValue(content);
        setContent(content);
        setModifyDiv(!modifyDiv);
    };

    const selectComment = () => {
        dispatch(selectAnswerDimo({ answer_id }));
        navigate("/dimo/qna");
    };
    const [like_cnt, setLikeCnt] = useState(like_count);
    const [islike, setIsLike] = useState(is_like);

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
    const [follow, setFollow] = useState(is_follow);
    const [barFollow, setBarFollow] = useState();

    const clickFollow = () => {
        setFollow(!follow);
        setBarFollow(!barFollow);
        if (follow) {
            dispatch(requestUnFollow(owner_account_id));
        } else {
            dispatch(requestFollow(owner_account_id));
        }
    };

    return (
        <>
            <Card is_selected={is_selected}>
                <Footer>
                    {owner_account_id == account_id ? (
                        <>
                            <MyBtn onClick={openModify}>수정</MyBtn>

                            <MyBtn onClick={ClickDelete}>삭제</MyBtn>
                        </>
                    ) : (
                        " "
                    )}

                    {!modifyDiv && <></>}
                    <div className="flex flex-row justify-start">
                        <Profile size="5" src={account_profile_img} className="hidden md:flex" />
                        <div className="ml-3 -mt-2">
                            <Title size="5" className="my-3">
                                {account_nickname}
                            </Title>
                            {/* <div className="flex flex-col">
                                <Subtitle size="2">
                                    채택받은 답변 수 <span className="text-blue-300"> 100</span>
                                </Subtitle>
                                <Subtitle size="2">
                                    관심 분야<span className="text-blue-300"> UI/UX</span>
                                </Subtitle>
                            </div> */}
                        </div>
                    </div>
                    <FollowBtn size="2" color="1" followed={is_follow} onClick={clickFollow} />
                </Footer>
                <UnderLine />
                <Header>
                    <div className="flex flex-row py-3">
                        <Text size="1">
                            {modify_time.split("T")[0] +
                                " " +
                                modify_time.split("T")[1].split(".")[0].slice(undefined, 5)}
                        </Text>
                        <InnerLine />
                        {/* <Text size="1">조회수 2천</Text>
                        <InnerLine /> */}
                        {is_selected && <Text size="1">채택완료</Text>}
                    </div>
                </Header>
                <Body>
                    <Text size="2" className="flex flex-wrap w-full pt-4 pb-16">
                        <div className="flex flex-col ">
                            {modifyDiv ? (
                                <div className="w-full ml-auto">
                                    <InputNoTitle
                                        value={name.value}
                                        onChange={name.onChange}
                                        cardsize="1"
                                        maxlen="30"
                                        width="2"
                                        is_submit
                                        placeholder={content}
                                        onSubmit={modifyComment}
                                    />
                                    <Button size="3" className="invisible ">
                                        제출
                                    </Button>
                                </div>
                            ) : (
                                <Text size="2" className="m-1">
                                    {content}
                                </Text>
                            )}
                        </div>
                    </Text>
                </Body>
                <Btns>
                    <div className="flex flex-row justify-between">
                        {islike ? (
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
                            <ButtonWithCount icon name="HeartE" color="4" size="3" count={like_cnt} onClick={addLike}>
                                <span className="hidden 2xl:contents">좋아요</span>
                            </ButtonWithCount>
                        )}

                        {owner_account_id == visitor_account_id && is_selected == false ? (
                            <>
                                <Button color="5" size="3" onClick={selectComment}>
                                    답변 채택하기
                                </Button>
                            </>
                        ) : (
                            " "
                        )}
                        {is_selected == true ? (
                            <>
                                <Button color="5" size="3">
                                    채택된 답변
                                </Button>
                            </>
                        ) : (
                            " "
                        )}
                    </div>
                </Btns>
            </Card>

            <></>

            <></>
        </>
    );
};

export default DimoQNAAnswer;
