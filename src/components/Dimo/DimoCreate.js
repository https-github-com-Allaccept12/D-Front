import React, { useState, useEffect } from "react";
import {
    Button,
    Title,
    InputNoTitle,
    Hashtag,
    Subtitle,
    SelectBoxCategory,
    Text,
    FileUploadDimo,
    FileEditDimo,
} from "../../elements";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewDimo, editDimo } from "../../redux/modules/dimo";
import tw from "tailwind-styled-components";
// import JobOptions from "../../elements/Tools/JobOptions";
import { useInput } from "../../hooks";

const Grid = tw.div`
bg-gray-100 h-full xl:p-10
`;

const Body = tw.div`
md:w-4/5 flex mx-auto flex-col pt-20
`;

const InnerGrid = tw.div`
w-full bg-white
`;

const DimoCreate = ({ match }) => {
    let location = useLocation();
    // console.log(location.state.board);

    const navigate = useNavigate();
    const { pathname } = useLocation();
    // console.log(pathname);
    let post_id = "";
    let isEdit = false;
    let board = "";

    const bbb = pathname.split("/")[4];

    // let deletes = []
    // useEffect(() => {
    //     if (match.params.post_id) {
    //         const visitor_account_id = sessionStorage.getItem("account_id");
    //         post_id = match.params.post_id;
    //         isEdit = match.params.isedit;
    //         board = match.params.board;
    //         if (isEdit) {
    //             dispatch(dimoQnaDetailLoad({ post_id, dispatch, visitor_account_id }));
    //         }
    //     }
    // }, []);

    const edits = useSelector((state) => state.dimo.detaildimoQna?.postAnswerSubDetail);
    const editImgs = useSelector((state) => state.dimo?.detaildimoQna);
    const delete_img = useSelector((state) => state?.image?.dimoDeletes);

    const editsInfoImgs = useSelector((state) => state.dimo.detaildimoInfo);
    const editInfo = useSelector((state) => state.dimo?.detailDimoInfo?.postSubDetail);
    // console.log(editInfo.post_id);
    // console.log(editInfo);
    const validmaxlen30 = (value) => value.length <= 30;
    const validmaxlen2000 = (value) => value.length <= 2000;
    const title = useInput("", [validmaxlen30]);
    const content = useInput("", [validmaxlen2000]);
    const edit = useInput(edits?.title, [validmaxlen30]);
    const editContents = useInput(edits?.content, [validmaxlen2000]);

    const editInfoTitle = useInput(editInfo?.title, [validmaxlen30]);
    const editInfoContents = useInput(editInfo?.content, [validmaxlen2000]);

    const dispatch = useDispatch();
    const dimo = useSelector((state) => state.image.dimoFiles);
    // console.log(editsInfoImgs);

    const JobOptions = [
        { value: "uiux", label: "???? UI & UX" },
        { value: "graphic", label: "???? ??????????????????" },

        { value: "edit", label: "???? ?????????/???????????????" },
        { value: "package", label: "???? ????????? ?????????" },
        { value: "product", label: "??????? ?????? ?????????" },

        { value: "typo", label: "???? ??????????????????" },
        { value: "video", label: "???? ??????/???????????????" },
        { value: "craft", label: "???? ??????" },
        { value: "fashion", label: "???? ??????" },
        { value: "game", label: "???? ??????/????????? ?????????" },

        { value: "eco", label: "???? ??????/????????????/?????? ?????????" },
    ];
    const [selected, setSelected] = useState("??????????????? ??????????????????");
    const [hashtags, setHashtags] = useState([]);
    // console.log(selected);
    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    const status = pathname.split("/")[3];

    const forSendTags = [];
    for (var item of hashtags) {
        var dic = {};
        dic["tag"] = item;
        forSendTags.push(dic);
    }

    const forDeletes = [];
    for (var item of delete_img) {
        var dic = {};
        dic["filename"] = item;
        forDeletes.push(dic);
    }

    const data = {
        title: title.value,
        category: selected,
        content: content.value,
        hash_tag: forSendTags,
        board: status.toUpperCase(),
    };

    const editData = {
        title: edit.value,
        category: selected,
        delete_img: forDeletes,
        hash_tag: forSendTags,
        content: editContents.value,
        // is_selected: edits.is_selected,
        // board: match.params.board,
    };

    const sandInfoEditData = {
        title: editInfoTitle.value,
        category: selected,
        delete_img: forDeletes,
        hash_tag: forSendTags,
        content: editInfoContents.value,
        // is_selected: edits.is_selected,
        // board: match.params.board,
    };

    // console.log(selected);
    const sandData = () => {
        if (selected == undefined || selected == "??????????????? ??????????????????") {
            alert("??????????????? ??????????????????!");
            return;
        }
        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        dimo.forEach((element) => formData.append("imgFile", element));
        for (var pair of formData.entries()) {
            // console.log(pair);
        }
        dispatch(CreateNewDimo(formData));

        navigate("/dimo/qna", { replace: true });
    };

    const sandEditData = () => {
        if (selected == undefined || selected == "??????????????? ??????????????????") {
            alert("??????????????? ??????????????????!");
            return;
        }
        const formData = new FormData();

        if (location.state?.board === "QNA") {
            formData.append("data", new Blob([JSON.stringify(editData)], { type: "application/json" }));
            dimo.forEach((element) => formData.append("imgFile", element));
            for (var pair of formData.entries()) {
                // console.log(pair);
            }
            const post_id = bbb;
            // console.log(formData, post_id);
            dispatch(editDimo({ formData, post_id }));

            navigate("/dimo/qna/all", { replace: true });
        }
        if (location.state?.board === "INFO") {
            formData.append("data", new Blob([JSON.stringify(sandInfoEditData)], { type: "application/json" }));
            dimo.forEach((element) => formData.append("imgFile", element));
            for (var pair of formData.entries()) {
                // console.log(pair);
            }
            const post_id = bbb;
            // console.log(formData, post_id);
            dispatch(editDimo({ formData, post_id }));

            navigate("/dimo/qna/all", { replace: true });
        }
    };

    if (status === "qna")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">????????????</Title>
                        <Subtitle size="1">???????????????????????? ??????????????????! ?????? ????????? ?????? ??? ???????????????!</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            ????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ?????? ????????????..
                        </Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 gap-4 p-8">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    value={selected}
                                >
                                    <option>??????????????? ??????????????????</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag hashtags={hashtags} setHashtags={setHashtags} />
                            </div>
                            <div className="flex flex-col px-8 gap-7">
                                <InputNoTitle
                                    maxlen="30"
                                    placeholder="??????"
                                    value={title.value}
                                    onChange={title.onChange}
                                    is_error={title.errors}
                                    is_value={title.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    is_error={content.errors}
                                    is_value={content.value.length}
                                    cardsize="2"
                                    maxlen="2000"
                                    placeholder="??????"
                                    value={content.value}
                                    onChange={content.onChange}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    <FileUploadDimo types="qna" />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button
                                    size="2"
                                    onClick={sandData}
                                    disabled={selected === "??????????????? ??????????????????" ? true : false}
                                >
                                    ????????????
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );

    if (status === "info")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">??????????????????</Title>
                        <Subtitle size="1">
                            ?????? ?????? ????????? ??????????????????! ?????? ????????????????????? ??? ????????? ??? ?????????!
                        </Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            ????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ?????? ????????????..
                        </Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 gap-4 p-8">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    value={selected}
                                >
                                    <option>??????????????? ??????????????????</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag hashtags={hashtags} setHashtags={setHashtags} />
                            </div>
                            <div className="flex flex-col px-8 gap-7">
                                <InputNoTitle
                                    maxlen="30"
                                    placeholder="??????"
                                    value={title.value}
                                    onChange={title.onChange}
                                    is_error={title.errors}
                                    is_value={title.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="??????"
                                    cardsize="2"
                                    value={content.value}
                                    onChange={content.onChange}
                                    is_error={content.errors}
                                    is_value={content.value.length}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    <FileUploadDimo types="info" />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button
                                    size="2"
                                    onClick={sandData}
                                    disabled={selected === "??????????????? ??????????????????" ? true : false}
                                >
                                    ????????????
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );

    if (status === "edits" && location.state?.board === "INFO")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">????????????</Title>
                        <Subtitle size="1">?????? ???????????? ????????? ??????</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            ????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ?????? ????????????..
                        </Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 gap-4 p-8">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    // defaultValue={edits?.category}
                                    value={selected}
                                >
                                    <option>??????????????? ??????????????????</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag hashtags={hashtags} setHashtags={setHashtags} />
                            </div>
                            <div className="flex flex-col px-8 gap-7">
                                <InputNoTitle
                                    placeholder="??????"
                                    maxlen="30"
                                    value={editInfoTitle.value}
                                    onChange={editInfoTitle.onChange}
                                    is_error={editInfoTitle.errors}
                                    is_value={editInfoTitle.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="??????"
                                    cardsize="2"
                                    value={editInfoContents.value}
                                    onChange={editInfoContents.onChange}
                                    is_error={editInfoContents.errors}
                                    is_value={editInfoContents.value.length}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    {editsInfoImgs?.img ? (
                                        <FileEditDimo imgs={editsInfoImgs?.img} />
                                    ) : (
                                        <FileUploadDimo types="info" />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button
                                    size="2"
                                    onClick={sandInfoEditData}
                                    disabled={selected === "??????????????? ??????????????????" ? true : false}
                                >
                                    ????????????
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );

    if (status === "edits" && location.state?.board === "QNA")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">????????????</Title>
                        <Subtitle size="1">?????? ???????????? ????????? ??????</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            ????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ?????? ????????????..
                        </Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 gap-4 p-8">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    // defaultValue={edits?.category}
                                    value={selected}
                                >
                                    <option>??????????????? ??????????????????</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag hashtags={hashtags} setHashtags={setHashtags} />
                            </div>
                            <div className="flex flex-col px-8 gap-7">
                                <InputNoTitle
                                    placeholder="??????"
                                    value={edit.value}
                                    onChange={edit.onChange}
                                    maxlen="30"
                                    is_error={edit.errors}
                                    is_value={edit.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="??????"
                                    cardsize="2"
                                    value={editContents.value}
                                    onChange={editContents.onChange}
                                    is_error={editContents.errors}
                                    is_value={editContents.value.length}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    {editImgs.img ? (
                                        <FileEditDimo imgs={editImgs.img} />
                                    ) : (
                                        <FileUploadDimo types="qna" />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button
                                    size="2"
                                    onClick={sandEditData}
                                    disabled={selected === "??????????????? ??????????????????" ? true : false}
                                >
                                    ????????????
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );
    else return null;
};

export default DimoCreate;
