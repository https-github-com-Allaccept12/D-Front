import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentDelete, commentModify } from "../../redux/modules/artWork";
import { useInput } from "../../hooks";
import { Button, Profile, Text, Subtitle, InputNoTitle, HeartButton } from "../../elements";

const Comment = (props) => {
    const { value } = props;
    const login_id = sessionStorage.getItem("account_id");
    const [contentValue, setContentValue] = useState(value.content);
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
        const comment_id = value.comment_id;
        const content = name.value;
        const data = { content: content };
        dispatch(commentModify({ comment_id, data }));
        setContentValue(content);
        setContent(content);
        setModifyDiv(!modifyDiv);
    };

    const deleteComment = () => {
        dispatch(commentDelete(value.comment_id));
    };

    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-row justify-start">
                    <Profile size="5" className="hidden sm:flex" src={value.account_profile} />
                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3 mt-1">
                            <Subtitle size="1" className="">
                                {value.account_nickname}
                            </Subtitle>
                            <Text size="4">
                                {value.modify_time.split("T")[0] +
                                    " " +
                                    value.modify_time.split("T")[1].split(".")[0].slice(undefined, 5)}
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
                                    placeholder={value.content}
                                    onSubmit={modifyComment}
                                />
                                <Button size="3" className="invisible ">
                                    제출
                                </Button>
                            </div>
                        ) : (
                            <Text size="2" className="m-1">
                                {value.content}
                            </Text>
                        )}
                    </div>
                </div>
                {login_id == value.account_id &&
                <div className="flex items-end">
                {!modifyDiv && (
                    <>
                        <button className="mr-3" onClick={openModify}>수정</button>
                        <button onClick={deleteComment}>삭제</button>
                    </>
                )}
                </div>
                }
            </div>
        </>
    );
};

export default Comment;
