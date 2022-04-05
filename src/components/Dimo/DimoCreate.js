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

import { useHistory, useLocation } from "react-router-dom";
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

const DimoCreate = ({ history, location, match }) => {
    let post_id = "";
    let isEdit = false;
    let board = "";
    const a = location.pathname;
    const bbb = a.split("/")[4];

    // let deletes = []
    useEffect(() => {
        if (match.params.post_id) {
            const visitor_account_id = sessionStorage.getItem("account_id");
            post_id = match.params.post_id;
            isEdit = match.params.isedit;
            board = match.params.board;
            if (isEdit) {
                dispatch(dimoQnaDetailLoad({ post_id, dispatch, visitor_account_id }));
            }
        }
    }, []);

    const edits = useSelector((state) => state.dimo.detaildimoQna?.postAnswerSubDetail);
    const editImgs = useSelector((state) => state.dimo?.detaildimoQna);
    const delete_img = useSelector((state) => state?.image?.dimoDeletes);

    const title = useInput("", []);
    const content = useInput("", []);
    const edit = useInput(edits?.title, []);
    const editContents = useInput(edits?.content, []);

    const dispatch = useDispatch();
    const dimo = useSelector((state) => state.image.dimoFiles);
    console.log(editImgs);

    const JobOptions = [
        { value: "uiux", label: "UI & UX" },
        { value: "fashion", label: "패션" },
        { value: "typo", label: "타이포그래피" },
        { value: "craft", label: "공예" },
        { value: "package", label: "패키지" },
        { value: "graphic", label: "그래픽" },
        { value: "video", label: "영상/모션" },
        { value: "product", label: "제품" },
        { value: "game", label: "게임/캐릭터" },
        { value: "edit", label: "브랜딩/편집" },
        { value: "eco", label: "건축/인테리어/환경" },
    ];
    const [selected, setSelected] = useState("");
    const [hashtags, setHashtags] = useState([]);
    // console.log(selected);
    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    };
    console.log(selected);
    const status = a.split("/")[3];

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
        is_selected: edits.is_selected,
        board: match.params.board,
    };

    const sandData = () => {
        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        dimo.forEach((element) => formData.append("imgFile", element));
        for (var pair of formData.entries()) {
            console.log(pair);
        }
        dispatch(CreateNewDimo(formData));
        // console.log(formData);
        history.replace("/dimo/qna/all");
    };

    const sandEditData = () => {
        const formData = new FormData();

        formData.append("data", new Blob([JSON.stringify(editData)], { type: "application/json" }));
        dimo.forEach((element) => formData.append("imgFile", element));
        for (var pair of formData.entries()) {
            console.log(pair);
        }
        const post_id = bbb;
        console.log(formData, post_id);
        dispatch(editDimo({ formData, post_id }));

        history.replace("/dimo/qna/all");
    };

    if (status === "qna")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">질문하기</Title>
                        <Subtitle size="1">디자이너님들에게 질문해보세요! 멋진 정보를 얻을 수 있을거에요!</Subtitle>

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
                                <InputNoTitle placeholder="제목" value={title.value} onChange={title.onChange} />
                                <InputNoTitle
                                    textarea
                                    maxlen="80"
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
                                <Button size="2" onClick={sandData}>
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
                                <InputNoTitle placeholder="제목" value={title.value} onChange={title.onChange} />
                                <InputNoTitle
                                    textarea
                                    maxlen="80"
                                    placeholder="내용"
                                    value={content.value}
                                    onChange={content.onChange}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    <FileUploadDimo types="info" />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2" onClick={sandData}>
                                    등록하기
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );

    if (status === "edits")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">수정하기</Title>
                        <Subtitle size="1">글을 수정하고 싶을땐 여기</Subtitle>

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
                                <InputNoTitle placeholder="제목" value={edit.value} onChange={edit.onChange} />
                                <InputNoTitle
                                    textarea
                                    maxlen="80"
                                    placeholder="내용"
                                    value={editContents.value}
                                    onChange={editContents.onChange}
                                />
                            </div>
                            <div className="p-8">
                                <div className="p-10 mx-auto bg-white border border-dashed border-dpurple-200">
                                    <FileEditDimo imgs={editImgs.img} />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2" onClick={sandEditData}>
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
