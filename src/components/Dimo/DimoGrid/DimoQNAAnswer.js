import React, { useState, useEffect } from "react";
import { Button, Subtitle, Profile, Title, Text, FollowBtn, InputNoTitle } from "../../../elements";
import { Comment } from "../../Comment";
import { useHistory, Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useToggle, useInput } from "../../../hooks";
import { deleteAnswerDimo, editAnswerDimo } from "../../../redux/modules/dimo";

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
    const history = useHistory();
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useToggle();

    const [contentValue, setContentValue] = useState(content);
    const [commentContent, setContent] = useState("");
    const [modifyDiv, setModifyDiv] = useState(false);

    const name = useInput("", []);

    const ClickDelete = () => {
        dispatch(deleteAnswerDimo(answer_id));
        history.replace("/dimo/qna");
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
        console.log(content);
        dispatch(editAnswerDimo({ answer_id, data }));
        setContentValue(content);
        setContent(content);
        setModifyDiv(!modifyDiv);
    };

    return (
        <>
            <Card selected={selected}>
                <Footer>
                    <button onClick={ClickDelete}>삭제</button>
                    {!modifyDiv && (
                        <>
                            <button onClick={openModify}>수정</button>
                        </>
                    )}
                    <div className="justify-start flex flex-row">
                        <Profile size="5" src={account_profile_img} className="hidden md:flex" />
                        <div className="-mt-2 ml-3">
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
                    <FollowBtn size="2" color="1" followed={is_follow} />
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
                        {selected && <Text size="1">채택완료</Text>}
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
                        <Button
                            icon
                            name="HeartE"
                            color="5"
                            size="3"
                            count="8"
                            is_like={is_like}
                            like_count={like_count}
                        >
                            <span className="hidden 2xl:contents">좋아요</span>
                        </Button>
                    </div>
                </Btns>
            </Card>

            <></>

            <></>
        </>
    );
};

export default DimoQNAAnswer;
