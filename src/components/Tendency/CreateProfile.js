import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { preview } from "../../redux/modules/image";
import { checknickname } from "../../redux/modules/checkNickname";
import { createProfile } from "../../redux/modules/createProfile";
import { setCookie } from "../../shared/cookie";
import { Button, Title, Image, Input, Text } from "../../elements";
import set_profile from "../../static/images/set_profile.svg";
import { useHistory, Link } from "react-router-dom";
import FileUpload from "../../elements/Tools/FileUpload";
import { useInput } from "../../hooks";
import { FakeHeader } from "../../NavComponents";
import tw from "tailwind-styled-components";

const Profile = tw.div`
bg-gradient-to-r from-[#9262F7] to-[#7681FB] absolute top-0 w-full h-[100rem]
`;

const Grid = tw.div`
xl:grid w-full xl:w-4/5 mx-auto mt-44 bg-white gap-3 rounded-md
`;

const Body = tw.div`
xl:grid col-start-2 col-end-3 pt-16 bg-white
`;

const MyPic = tw.div`
xl:grid row-start-1 row-end-2 mb-10
`;

const Names = tw.div`
p-4 pl-10
`;

const Contacts = tw.div`
p-4 pl-10 flex gap-3 flex-col
`;

const CreateProfile = (props) => {
    const dispatch = useDispatch();
    let profile = useSelector((state) => state.image.url);
    let image = useSelector((state) => state.image.file);
    // let tendencyResult = useSelector((state) => state.tendency.tendency);
    // let interestResult = useSelector((state) => state.interests.interests);
    const [nicknameState, setNicknameState] = useState("");
    const nicknameValidMaxLen = (value) => value.length <= 10;
    const nickname = useInput("", [nicknameValidMaxLen]);
    const name = useInput("", []);
    const email = useInput("", []);
    const linkedIn = useInput("", []);
    const brunch = useInput("", []);
    const instagram = useInput("", []);
    // const introduce = useInput("", []);
    const JobOptions = [
        { value: "UI/UX", label: "UI & UX" },
        { value: "패션", label: "패션" },
        { value: "타이포그래피", label: "타이포그래피" },
        { value: "공예", label: "공예" },
        { value: "패키지", label: "패키지" },
        { value: "그래픽", label: "그래픽" },
        { value: "영상/모션", label: "영상/모션" },
        { value: "제품", label: "제품" },
        { value: "게임/캐릭터", label: "게임/캐릭터" },
        { value: "브랜딩/편집", label: "브랜딩/편집" },
        { value: "건축/인테리어/환경", label: "건축/인테리어/환경" },
    ];

    const [selected, setSelected] = useState("");
    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    const checkNickname = () => {
        const map = {
            nickname: nickname.value,
        };
        dispatch(checknickname({ map, setNicknameState }));
    };

    const deleteProfile = () => {
        dispatch(preview(""));
    };

    const SendProfile = () => {
        const formData = new FormData();
        const data = {
            nickname: nickname.value,
            intro_content: "ㅋ",
            work_email: email.value,
            linked_in: linkedIn.value,
            brunch: brunch.value,
            insta: instagram.value,
            job: selected,
            // work_time: 0,
            phone_number: "010",
            work_time: "1",
        };
        // console.log(data);
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("imgFile", image);
        // dispatch(createProfile(data));
        dispatch(createProfile(formData));
        // setCookie("nickname", nickname.value);
    };

    return (
        <>
            <FakeHeader />
            <Profile>
                <Grid>
                    <div className="flex flex-col mx-auto justify-center max-w-xl items-center xl:mb-32">
                        <img src={set_profile} />
                        <Title size="5" className="xl:text-2xl">
                            님의 프로필을 구성해 볼까요?
                        </Title>
                        <Text size="1" className="mt-4">
                            다른 이용자님들에게 보여질 프로필입니다.
                            <br />
                            설정하신 프로필은 어쩌구저쩌구에 활용됩니다.
                        </Text>
                    </div>

                    <Body>
                        <MyPic>
                            <Title size="3" className="pb-5 pl-12">
                                내 정보
                            </Title>
                            <div className="grid col-start-1 col-end-2 place-content-center mb-2">
                                <FileUpload></FileUpload>
                                {profile !== "" && (
                                    <p
                                        onClick={deleteProfile}
                                        className="cursor-pointer text-center font-min1 text-dgray-400 hover:text-dpurple-400 "
                                    >
                                        삭제
                                    </p>
                                )}
                            </div>

                            <Names>
                                <Input
                                    cardSize="2"
                                    title="닉네임"
                                    onBlur={checkNickname}
                                    value={nickname.value}
                                    onChange={nickname.onChange}
                                    is_value={nickname.value.length}
                                    maxLen="10"
                                />
                                {nicknameState == "available" && <p className="pr-16 text-xs text-right">✔️</p>}
                                {nicknameState == "fail" && (
                                    <p className="pr-16 text-xs text-right text-red-600">
                                        이미 사용 중인 닉네임 입니다.
                                    </p>
                                )}
                                <Input
                                    cardSize="2"
                                    title="이름"
                                    value={name.value}
                                    onChange={name.onChange}
                                    is_value={name.value.length}
                                ></Input>
                                <div className="grid items-center justify-start">
                                    <Text className="w-1/2 row-start-1 mr-10 font-min1 text-sm md:text-base mt-3">
                                        분야
                                    </Text>
                                    <select
                                        className="row-start-1 mt-3 font-min1"
                                        onChange={handleChangeSelect}
                                        vlaue={selected}
                                    >
                                        <option value="" selected disabled hidden>
                                            선택해주세요
                                        </option>
                                        {JobOptions.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </Names>
                        </MyPic>
                        <Contacts>
                            <Title size="3" className="pb-5 pl-3">
                                Contact
                            </Title>
                            <Input
                                cardSize="2"
                                title="이메일"
                                value={email.value}
                                onChange={email.onChange}
                                is_value={email.value.length}
                            ></Input>
                            <Input
                                cardSize="2"
                                title="링크드인"
                                value={linkedIn.value}
                                onChange={linkedIn.onChange}
                                is_value={linkedIn.value.length}
                            ></Input>
                            <Input
                                cardSize="2"
                                title="브런치"
                                value={brunch.value}
                                onChange={brunch.onChange}
                                is_value={brunch.value.length}
                            ></Input>
                            <Input
                                cardSize="2"
                                title="인스타그램"
                                value={instagram.value}
                                onChange={instagram.onChange}
                                is_value={instagram.value.length}
                            ></Input>
                        </Contacts>
                        <div className="my-10 pb-10">
                            <Link to="/CompleteProfile">
                                <Button size="3" color="1" onClick={SendProfile}>
                                    작성 완료
                                </Button>
                            </Link>
                        </div>
                    </Body>
                </Grid>
            </Profile>
        </>
    );
};

export default CreateProfile;