import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentDeleteDimo, commentModifyDimo } from "../../redux/modules/dimo";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useInput, useToggle } from "../../hooks";
import { Button, Profile, Text, Subtitle, InputNoTitle, HeartButton } from "../../elements";
import tw from "tailwind-styled-components";

const MyBtn = tw.button`
    font-min1 text-tiny text-dpurple-200 hover:text-dpurple-300 mr-1
`;

const CommentDimo = (props) => {
    const {
        account_id,
        account_nickname,
        account_profile_img,
        comment_id,
        content,
        is_comment_like,
        like_count,
        modify_time,
    } = props;
    let navigate = useNavigate();
    let { pathname } = useLocation();
    const post_id = pathname.split("/")[3];
    const [contentValue, setContentValue] = useState(content);
    const dispatch = useDispatch();
    const [commentContent, setContent] = useState("");
    const [modifyDiv, setModifyDiv] = useState(false);

    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);

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
        dispatch(commentModifyDimo({ comment_id, data }));
        setContentValue(content);
        setContent(content);
        setModifyDiv(!modifyDiv);
    };

    const deleteComment = () => {
        dispatch(commentDeleteDimo(comment_id));
        navigate(`/dimo/info`, { replace: true });
        // forceUpdate();
    };
    let a_id = "";
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        a_id = id_cookie;
    }

    const visitor_account_id = a_id;
    let owner_account_id = account_id;

    const clickProfile = () => {
        // console.log("click accountid", barAccountId);
        navigate(`/myspace/myprofile/${account_id}`);
    };
    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-row justify-start">
                    <Profile
                        size="5"
                        className="hidden sm:flex cursor-pointer"
                        src={account_profile_img}
                        onClick={clickProfile}
                    />
                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3 mt-1">
                            <Subtitle size="1" className="">
                                {account_nickname}
                            </Subtitle>
                            <Text size="4">
                                {modify_time.split("T")[0] +
                                    " " +
                                    modify_time.split("T")[1].split(".")[0].slice(undefined, 5)}
                            </Text>
                        </div>
                        {modifyDiv ? (
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
                                    placeholder={content}
                                    onSubmit={modifyComment}
                                />
                                <Button size="3" className="invisible">
                                    제출
                                </Button>
                            </div>
                        ) : (
                            <Text size="2" className="m-1">
                                {content}
                            </Text>
                        )}
                    </div>
                </div>
                {!modifyDiv && (
                    <>
                        <div className="flex flex-row justify-end gap-2 font-min1 text-tiny">
                            {owner_account_id == visitor_account_id ? (
                                <>
                                    <MyBtn onClick={openModify}>수정</MyBtn>

                                    <MyBtn onClick={deleteComment}>삭제</MyBtn>
                                </>
                            ) : (
                                " "
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CommentDimo;
