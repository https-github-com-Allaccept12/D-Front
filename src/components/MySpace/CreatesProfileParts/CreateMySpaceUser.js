import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { preview, forSend } from "../../../redux/modules/image";
import { myPageLoad } from "../../../redux/modules/myPage";
import { checknickname } from "../../../redux/modules/checkNickname";
import { createProfile } from "../../../redux/modules/createProfile";
import { Button, Input, Profile, Text, Title, Subtitle, PageLoadSpinner } from "../../../elements";
import set_profile from "../../../static/images/set_profile.svg";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../../elements/Tools/FileUpload";
import { useInput } from "../../../hooks";
import Dropzone, { useDropzone } from "react-dropzone";
import axios from "axios";

const CreateMySpaceUser = (props) => {
    // const { info } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let account_id = 0;
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const owner_account_id = account_id;
    useEffect(() => {
        dispatch(myPageLoad({ account_id, owner_account_id, dispatch }));
    }, [dispatch, account_id, owner_account_id]);

    const info = useSelector((state) => state.myPage.myPage);

    const nicknameValidMaxLen = (value) => value.length <= 10;

    let nickTemp = "";
    let emailTemp = "";
    let linkedTemp = "";
    let brunchTemp = "";
    let InstaTemp = "";
    let job = "";

    useEffect(() => {
        if (info) {
            dispatch(preview(info.profile_img));
        }
    }, [info]);

    if (info) {
        nickTemp = info.nickname;
        emailTemp = info.work_email;
        linkedTemp = info.linked_in;
        brunchTemp = info.brunch;
        InstaTemp = info.insta;
        job = info.job;
    }

    // console.log(nickTemp);
    const nickname = useInput(nickTemp, [nicknameValidMaxLen]);
    const email = useInput(emailTemp, []);
    const linkedIn = useInput(linkedTemp, []);
    const brunch = useInput(brunchTemp, []);
    const instagram = useInput(InstaTemp, []);
    const profile = useSelector((state) => state.image.url);
    const image = useSelector((state) => state.image.file);
    const [nicknameState, setNicknameState] = useState("");

    const JobOptions = [
        { value: "UI & UX", label: "UI & UX" },
        { value: "??????", label: "??????" },
        { value: "??????????????????", label: "??????????????????" },
        { value: "??????", label: "??????" },
        { value: "?????????", label: "?????????" },
        { value: "?????????", label: "?????????" },
        { value: "??????/??????", label: "??????/??????" },
        { value: "??????", label: "??????" },
        { value: "??????/?????????", label: "??????/?????????" },
        { value: "?????????/??????", label: "?????????/??????" },
        { value: "??????/????????????/??????", label: "??????/????????????/??????" },
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

    // const deleteProfile = () => {
    //     dispatch(preview(""));
    // };

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
            // intro_content: intro,
            work_time: " ",
            // name: name.value,
            work_email: email.value,
            linked_in: linkedIn.value,
            brunch: brunch.value,
            insta: instagram.value,
            job: selected,
        };
        // console.log(data);
        // console.log(image);
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("imgFile", image);
        // dispatch(createProfile(data));
        // console.log(formData);
        dispatch(createProfile({ formData, dispatch }));
        navigate(-1);
    };

    const [time, setTime] = useState(true);

    useEffect(() => {
        const aaa = setTimeout(() => {
            setTime();
        }, 500);
    }, []);

    return (
        <>
            {time === true ? (
                <PageLoadSpinner />
            ) : (
                <>
                    <div className="gap-3 p-2 mt-10 xl:grid grid-row-3">
                        <div className="row-start-1 row-end-2 gap-10 mb-10 xl:grid">
                            <Title size="4">??? ??????</Title>
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
                            <div className="col-start-2 col-end-5 xl:grid">
                                <div className="flex flex-col mt-10">
                                    <Input
                                        cardSize="2"
                                        title="?????????"
                                        onBlur={checkNickname}
                                        value={nickname?.value}
                                        onChange={nickname?.onChange}
                                        is_value={nickname?.value.length}
                                        is_error={nickname?.errors}
                                        maxLen="10"
                                    />
                                    {nicknameState == "available" && <p className="-mt-10 text-xs text-right">??????</p>}
                                    {nicknameState == "fail" && (
                                        <p className="pr-16 text-xs text-right text-red-600">
                                            ?????? ?????? ?????? ????????? ?????????.
                                        </p>
                                    )}
                                </div>
                                {/* <div className="mt-10">
                            <Input
                                cardSize="2"
                                title="??????"
                                value={name.value}
                                onChange={name.onChange}
                                is_value={name.value.length}
                                // placeholder={info.}
                            />
                        </div> */}
                                <div className="flex flex-row items-center justify-between mt-10 ">
                                    <Subtitle size="2">??????</Subtitle>
                                    <select
                                        className="h-12 px-5 ml-4 text-base border rounded-lg outline-none border-dgray-400 font-min1 ring-1 ring-dpurple-200"
                                        onChange={handleChangeSelect}
                                        value={selected}
                                    >
                                        <option>{job && job}</option>
                                        {JobOptions.map((item, index) => (
                                            <option key={index} value={item.value}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <Title size="4">Contact</Title>
                            <Input
                                cardSize="2"
                                title="?????????"
                                value={email?.value}
                                onChange={email?.onChange}
                                // is_value={email?.value.length}
                            ></Input>
                            <Input
                                cardSize="2"
                                title="????????????"
                                value={linkedIn?.value}
                                onChange={linkedIn?.onChange}
                                placeholder="???????????? ??????????????????"
                            ></Input>
                            <Input
                                cardSize="2"
                                title="?????????"
                                value={brunch?.value}
                                onChange={brunch?.onChange}
                                placeholder="???????????? ??????????????????"
                            ></Input>
                            <Input
                                cardSize="2"
                                title="???????????????"
                                value={instagram?.value}
                                onChange={instagram?.onChange}
                                placeholder="???????????? ??????????????????"
                            ></Input>
                        </div>
                    </div>
                    <div className="grid w-full py-10 bg-white place-items-center">
                        <Button onClick={SendProfile}>??????</Button>
                    </div>
                </>
            )}
        </>
    );
};
export default CreateMySpaceUser;
