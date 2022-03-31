import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { preview } from "../../../redux/modules/image";
import { checknickname } from "../../../redux/modules/checkNickname";
import { createProfile } from "../../../redux/modules/createProfile";
import { Button, Input, Profile } from "../../../elements";
import set_profile from "../../../static/images/set_profile.svg";
import { useHistory, Link } from "react-router-dom";
import FileUpload from "../../../elements/Tools/FileUpload";
import { useInput } from "../../../hooks";
import Dropzone, { useDropzone } from "react-dropzone";

const CreateProfile = (props) => {
    const { info } = props;
    const dispatch = useDispatch();
    const profile = info.profile_img;
    const image = useSelector((state) => state.image.file);
    const [nicknameState, setNicknameState] = useState("");
    const nicknameValidMaxLen = (value) => value.length <= 10;
    const nickname = useInput(info.nickname, [nicknameValidMaxLen]);
    const name = useInput("", []);
    const email = useInput("", []);
    const linkedIn = useInput(info.linked_in, []);
    const brunch = useInput(info.brunch, []);
    const instagram = useInput(info.instagram, []);
    const JobOptions = [
        { value: "UIUX", label: "UI & UX" },
        { value: "fashion", label: "패션" },
        { value: "typography", label: "타이포그래피" },
        { value: "crafts", label: "공예" },
        { value: "pakage", label: "패키지" },
        { value: "graphic", label: "그래픽" },
        { value: "video", label: "영상/모션" },
        { value: "product", label: "제품" },
        { value: "game", label: "게임/캐릭터" },
        { value: "branding", label: "브랜딩/편집" },
        { value: "interior", label: "건축/인테리어/환경" },
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

    const onDrop = useCallback((acceptedFile) => {
        const reader = new FileReader();
        dispatch(forSend(acceptedFile[0]));

        reader.readAsDataURL(acceptedFile[0]);
        reader.onload = () => {
            dispatch(preview(reader.result));
        };
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const SendProfile = () => {
        const formData = new FormData();
        let data = {
            nickname: nickname.value,
            // intro_content: introduce.value,
            name: name.value,
            work_email: email.value,
            linked_in: linkedIn.value,
            brunch: brunch.value,
            insta: instagram.value,
            job: selected,
        };
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("profile_img", image);
        // dispatch(createProfile(data));
        dispatch(createProfile(formData));
    };

    return (
        <>
            <div className="grid gap-3 mt-10 grid-row-3">
                <div className="grid row-start-1 row-end-2 mb-10">
                    <p className="text-2xl font-bold">내 정보</p>
                    <div className="grid col-start-1 col-end-2 place-content-center">
                        <Dropzone
                            multiple={false}
                            accept={"image/gif, image/jpg, image/jpeg, image/png"}
                            onDrop={onDrop}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {profile !== "" ? (
                                            <Profile size="1" src={profile}></Profile>
                                        ) : (
                                            <>
                                                <img src={set_profile} />
                                                <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
                                            </>
                                        )}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="grid col-start-2 col-end-3 gap-3">
                        <Input
                            cardsize="2"
                            title="닉네임"
                            onBlur={checkNickname}
                            value={nickname.value}
                            onChange={nickname.onChange}
                            is_value={nickname.value.length}
                            is_error={nickname.errors}
                            maxLen="10"
                        ></Input>
                        {nicknameState == "available" && <p className="pr-16 text-xs text-right">✔️</p>}
                        {nicknameState == "fail" && (
                            <p className="pr-16 text-xs text-right text-red-600">이미 사용 중인 닉네임 입니다.</p>
                        )}
                        <Input
                            cardsize="2"
                            title="이름"
                            value={name.value}
                            onChange={name.onChange}
                            is_value={name.value.length}
                            // placeholder={info.}
                        ></Input>
                        <div className="grid items-center justify-start">
                            <p className="w-1/2 row-start-1 mr-10 font-min1">분야</p>
                            <select className="row-start-1" onChange={handleChangeSelect} vlaue={selected}>
                                <option>{info.job}</option>
                                {JobOptions.map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid row-start-2 row-end-3 gap-3">
                    <p className="text-2xl font-bold">Contact</p>
                    <Input
                        cardsize="2"
                        title="이메일"
                        value={email.value}
                        onChange={email.onChange}
                        is_value={email.value.length}
                    ></Input>
                    <Input cardsize="2" title="링크드인" value={linkedIn.value} onChange={linkedIn.onChange}></Input>
                    <Input cardsize="2" title="브런치" value={brunch.value} onChange={brunch.onChange}></Input>
                    <Input
                        cardsize="2"
                        title="인스타그램"
                        value={instagram.value}
                        onChange={instagram.onChange}
                    ></Input>
                </div>
            </div>
            <div className="grid w-full py-10 bg-white place-items-center">
                <Button onClick={SendProfile}>다음</Button>
            </div>
        </>
    );
};

export default CreateProfile;
