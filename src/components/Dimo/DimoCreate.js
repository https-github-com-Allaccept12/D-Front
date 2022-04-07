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
        { value: "uiux", label: "📱 UI & UX" },
        { value: "graphic", label: "🎨 그래픽디자인" },

        { value: "edit", label: "📠 브랜딩/편집디자인" },
        { value: "package", label: "🎁 패키지 디자인" },
        { value: "product", label: "🏷️ 제품 디자인" },

        { value: "typo", label: "📝 타이포그래피" },
        { value: "video", label: "🎬 영상/모션그래픽" },
        { value: "craft", label: "🧶 공예" },
        { value: "fashion", label: "👗 패션" },
        { value: "game", label: "🎮 게임/캐릭터 디자인" },

        { value: "eco", label: "🏠 건축/인테리어/환경 디자인" },
    ];
    const [selected, setSelected] = useState("카테고리를 선택해주세요");
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
        if (selected == undefined || selected == "카테고리를 선택해주세요") {
            alert("카테고리를 입력해주세요!");
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
        if (selected == undefined || selected == "카테고리를 선택해주세요") {
            alert("카테고리를 입력해주세요!");
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
                        <Title size="2">질문하기</Title>
                        <Subtitle size="1">디자이너님들에게 질문해보세요! 멋진 정보를 얻을 수 있을거에요!</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            주제와 관련없는 이미지 업로드시 무통보 삭제 조치 될수 있습니다..
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
                                    <option>카테고리를 선택해주세요</option>
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
                                    placeholder="제목"
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
                                    placeholder="내용"
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
                                    disabled={selected === "카테고리를 선택해주세요" ? true : false}
                                >
                                    등록하기
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
                        <Title size="2">정보공유하기</Title>
                        <Subtitle size="1">
                            알고 계신 정보를 공유해주세요! 다른 디자이너분들께 큰 도움이 될 거에요!
                        </Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            주제와 관련없는 이미지 업로드시 무통보 삭제 조치 될수 있습니다..
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
                                    <option>카테고리를 선택해주세요</option>
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
                                    placeholder="제목"
                                    value={title.value}
                                    onChange={title.onChange}
                                    is_error={title.errors}
                                    is_value={title.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="내용"
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
                                    disabled={selected === "카테고리를 선택해주세요" ? true : false}
                                >
                                    등록하기
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
                        <Title size="2">수정하기</Title>
                        <Subtitle size="1">글을 수정하고 싶을땐 여기</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            주제와 관련없는 이미지 업로드시 무통보 삭제 조치 될수 있습니다..
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
                                    <option>카테고리를 선택해주세요</option>
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
                                    placeholder="제목"
                                    maxlen="30"
                                    value={editInfoTitle.value}
                                    onChange={editInfoTitle.onChange}
                                    is_error={editInfoTitle.errors}
                                    is_value={editInfoTitle.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="내용"
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
                                    disabled={selected === "카테고리를 선택해주세요" ? true : false}
                                >
                                    등록하기
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
                        <Title size="2">수정하기</Title>
                        <Subtitle size="1">글을 수정하고 싶을땐 여기</Subtitle>
                        <Subtitle size="2" className="text-dgray-300">
                            주제와 관련없는 이미지 업로드시 무통보 삭제 조치 될수 있습니다..
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
                                    <option>카테고리를 선택해주세요</option>
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
                                    placeholder="제목"
                                    value={edit.value}
                                    onChange={edit.onChange}
                                    maxlen="30"
                                    is_error={edit.errors}
                                    is_value={edit.value.length}
                                />
                                <InputNoTitle
                                    textarea
                                    maxlen="2000"
                                    placeholder="내용"
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
                                    disabled={selected === "카테고리를 선택해주세요" ? true : false}
                                >
                                    등록하기
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
