import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateNewArtWork, RequestModifyArtWork } from "../../redux/modules/artWork";
import { preview } from "../../redux/modules/image";
import Portal from "../../elements/Tools/Portal";
import { MultiSelect } from "react-multi-select-component";
import Dropzone, { useDropzone } from "react-dropzone";
import skillList from "./skillList";
import Swal from "sweetalert2";

import { Button, Card, Input, CheckBox, Title, RadioButton, InputNoTitle, Text, Tooltips } from "../../elements";
import tw from "tailwind-styled-components";

const B = tw.div`
bg-dpurple-200 text-white rounded-full w-5 h-5 flex 
justify-center items-center p-1 cursor-default peer mt-2 ml-1 md:mt-3 md:ml-2
`;

const ArtWorkCreateModal = ({ onClose, info, isEdit, deleteList, artwork_id }) => {
    // console.log(info, isEdit, deleteList, artwork_id);
    // 작품 수정 시 세팅
    const [titleTemp, setTitleTemp] = useState("");
    const [contentTemp, setContentTemp] = useState("");
    const [thumbnailInEdit, setThumbnailInEdit] = useState("");
    let spcialtyTemp = "";
    useEffect(() => {
        if (isEdit) {
            setTitleTemp(info?.title);
            setContentTemp(info?.content);
            setThumbnailInEdit(info?.thumbnail);
        }
    }, []);

    // 기본 세팅
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // 작품 이미지들 리덕스에서 불러옴
    const artworkfiles = useSelector((state) => state.image.artworkFiles);

    // 표지 ------------------------------------------------------------------------
    // 리덕스에서 불러옴
    const cover = useSelector((state) => state.image.url);
    // useState
    const [forSendCover, setForSendCover] = useState();
    // 이미지 처리 함수
    const [thumbnail, setThumbnail] = useState();
    const onDrop = useCallback((acceptedFile) => {
        setThumbnail(acceptedFile[0].name);
        setThumbnailInEdit(acceptedFile[0].name);
        const reader = new FileReader();
        setForSendCover(acceptedFile[0]);
        reader.readAsDataURL(acceptedFile[0]);
        reader.onload = () => {
            dispatch(preview(reader.result));
            // console.log(reader.result.fileName);
        };
        // console.log(thumbnail);
        // reader.fileName(acceptedFile[0])
        // reader.onload = (e) => {
        //   console.log(e.target.fileName);
        // }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    // 사용툴-------------------------------------------------------------------------
    // options
    const options = skillList;
    // useState
    const [toolSelected, setToolSelected] = useState([]);

    useEffect(() => {
        if (isEdit) {
            spcialtyTemp = info.specialty;
            var mainTemp = spcialtyTemp.split("/");
            for (var i in mainTemp) {
                var dic = {};
                dic["label"] = mainTemp[i];
                dic["value"] = mainTemp[i];
                if (i == 0) {
                    toolSelected.pop();
                }
                toolSelected.push(dic);
            }
        }
    }, []);

    // string으로 변환
    const specialty = [];
    for (var value of toolSelected) {
        specialty.push(value.value);
    }
    // console.log(specialty);

    // 저작권-------------------------------------------------------------------------
    // useState
    const [CopyRight, setCopyRight] = useState("");

    // options
    const copyrightOptions = [
        { value: "판권 소유", label: "판권 소유" },
        { value: "저작자 표시", label: "저작자 표시" },
        { value: "저작자 표시 - 비영리", label: "저작자 표시 - 비영리" },
        { value: "저작자 표시 - 변경 금지", label: "저작자 표시 - 변경 금지" },
        {
            value: "저작자 표시 - 동일 조건 변경 허락",
            label: "저작자 표시 - 동일 조건 변경 허락",
        },
        {
            value: "저작자 표시 - 비영리 - 동일 조건 변경 허락",
            label: "저작자 표시 - 비영리 - 동일 조건 변경 허락",
        },
        {
            value: "저작자 표시 - 비영리 - 변경 금지",
            label: "저작자 표시 - 비영리 - 변경 금지",
        },
    ];
    // 선택 변경 실행 함수
    const selectCopyRight = (e) => {
        setCopyRight(e.target.value);
    };

    // 공개 여부 ------------------------------------------------------------------------
    // useState
    const [Public, setPublic] = useState("");
    // options
    const publicOptions = [
        { value: true, label: "공개" },
        { value: false, label: "비공개" },
    ];
    // select 실행함수
    const selectPublic = (e) => {
        if (e.target.value == "true") {
            setPublic(true);
        } else {
            setPublic(false);
        }
    };
    // 타이틀, 카테고리, 시작 및 종료 날짜, 설명  ----------------------------------------
    // useState
    const [inputs, setInputs] = useState({
        title: "",
        category: "",
        startDate: "",
        endDate: "",
        description: "",
    });
    const { title, description, startDate, endDate, category } = inputs;
    // onChange 실행 함수
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        // console.log(inputs);
    };

    // 다음 버튼 클릭 시 실행 함수
    const createArtWork = () => {
        if (!thumbnail & !isEdit) {
            Swal.fire({
                icon: "error",
                title: "썸네일을 등록해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }
        if (toolSelected.length === 0) {
            Swal.fire({
                icon: "error",
                title: "사용 툴을 정해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }
        if (!inputs.startDate) {
            Swal.fire({
                icon: "error",
                title: "작업 기간을 설정해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            timer: 1000;
            return;
        }
        if (!inputs.endDate) {
            Swal.fire({
                icon: "error",
                title: "작업 기간을 설정해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }
        if (!inputs.title) {
            Swal.fire({
                icon: "error",
                title: "프로젝트 제목을 작성해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }
        if (!inputs.category) {
            Swal.fire({
                icon: "error",
                title: "작품 카테고리를 설정해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }
        if (!CopyRight) {
            Swal.fire({
                icon: "error",
                title: "저작권 여부를 설정해 주세요",
                showConfirmButton: false,
                timer: 1000,
            });
            return;
        }

        const skills = specialty.join("/");

        // 서버에 보내기 전 data에 json형식으로 모아주기 --------------------------------------------
        let data = {};
        if (isEdit) {
            data = {
                title: inputs.title,
                category: inputs.category,
                specialty: skills,
                work_start: inputs.startDate,
                work_end: inputs.endDate,
                content: inputs.description,
                copyright: CopyRight,
                is_master: false,
                scope: Public,
                thumbnail: thumbnailInEdit,
                delete_img: deleteList,
            };
        } else {
            data = {
                title: inputs.title,
                category: inputs.category,
                specialty: skills,
                work_start: inputs.startDate,
                work_end: inputs.endDate,
                content: inputs.description,
                copyright: CopyRight,
                is_master: false,
                scope: Public,
                thumbnail: thumbnail,
            };
        }
        // console.log(data);

        // 멀티 폼데이터 생성
        const formData = new FormData();
        // console.log(data);
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        formData.append("imgFile", forSendCover);
        artworkfiles.forEach((element) => formData.append("imgFile", element));
        // console.log(formData);
        if (isEdit) {
            dispatch(RequestModifyArtWork({ artwork_id, formData }));
        } else {
            dispatch(CreateNewArtWork(formData));
        }
        // navigate.replace("/art/list/all");
        let timerInterval;
        Swal.fire({
            title: "업로드 중..",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            Swal.fire({
                icon: "success",
                title: "성공!",
                showConfirmButton: false,
                timer: 1000,
            });
        });
        navigate(`/art/list/all`, { replace: true });
    };

    const [inputList, setInputList] = useState([
        {
            videoLink: "",
        },
    ]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([
            ...inputList,
            {
                videoLink: "",
            },
        ]);
    };

    return (
        <Portal>
            <div className="fixed z-10 w-full h-full bg-gray-500 bg-opacity-80">
                <div className="z-20 flex flex-col mx-auto my-6 text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto lg:w-5/6 xl:my-20 h-5/6 modal-content">
                    <div className="p-4 bg-white modal-header rounded-t-md">
                        <button
                            type="button"
                            onClick={onClose}
                            className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="w-full h-full p-4 overflow-x-hidden overflow-y-scroll bg-white xl:grid xl:col-start-2 modal-body">
                        <div className="flex flex-col items-center justify-center md:justify-start xl:ml-24 ">
                            <Title size="4">프로젝트 표지</Title>
                            <Dropzone
                                multiple={false}
                                accept={"image/gif, image/jpg, image/jpeg, image/png"}
                                onDrop={onDrop}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            {cover !== "" ? (
                                                <Card size="6" types="image" src={cover} />
                                            ) : (
                                                <>
                                                    {/* <img src={profile_upload} /> */}
                                                    <div className="w-t04 h-t04 bg-dgray-200"> </div>
                                                    <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
                                                </>
                                            )}
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div className="items-center h-screen col-span-2 col-start-1 col-end-4 row-start-1 gap-3 bg-white xl:grid xl:grid-cols-6 md:col-start-2 grid-rows-10">
                            <div className="col-span-4 col-start-2 col-end-6 row-start-1">
                                <Title size="3">
                                    프로젝트 제목
                                    <span className="font-bold text-purple-600"> *</span>
                                </Title>
                                <InputNoTitle
                                    className="border border-gray-400 rounded-md focus:border-purple-400"
                                    size="70"
                                    height="40"
                                    placeholder={titleTemp ? titleTemp : "내용을 입력하세요"}
                                    type="text"
                                    name="title"
                                    value={inputs.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-4 col-start-2 row-start-2">
                                <Title size="3">
                                    카테고리<span className="font-bold text-purple-600"> *</span>
                                </Title>
                                <div
                                    onChange={handleChange}
                                    className="flex flex-row flex-wrap items-center justify-center gap-5 p-3"
                                >
                                    <RadioButton
                                        size="1"
                                        color="1"
                                        type="radio"
                                        name="category"
                                        value="ui"
                                        inline="ui/ux"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="typo"
                                        inline="타이포그래피"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="crafts"
                                        inline="공예"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="pakage"
                                        inline="패키지"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="graphic"
                                        inline="그래픽"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="fashion"
                                        inline="패션"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="video"
                                        inline="영상"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="product"
                                        inline="제품"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="game"
                                        inline="게임/캐릭터"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="branding"
                                        inline="브랜딩/편집"
                                    />
                                    <RadioButton
                                        type="radio"
                                        size="1"
                                        color="1"
                                        name="category"
                                        value="interior"
                                        inline="건축/인테리어/환경"
                                    />
                                </div>
                            </div>

                            <div className="col-span-4 col-start-2">
                                <Title size="3">
                                    사용 툴<span className="font-bold text-purple-600"> *</span>
                                </Title>
                                <MultiSelect
                                    options={options}
                                    value={toolSelected}
                                    labelledBy="Select"
                                    onChange={setToolSelected}
                                />
                            </div>

                            <div className="col-span-4 col-start-2 row-start-4">
                                <Title size="3">
                                    작업 기간<span className="font-bold text-purple-600"> *</span>
                                </Title>
                                <div className="flex flex-row gap-3">
                                    <InputNoTitle
                                        type="text"
                                        name="startDate"
                                        placeholder="YYYY.MM"
                                        onChange={handleChange}
                                        value={inputs.startDate}
                                    />
                                    <Title size="5"> - </Title>
                                    <InputNoTitle
                                        type="text"
                                        name="endDate"
                                        placeholder="YYYY.MM"
                                        value={inputs.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-span-4 col-start-2 row-start-5 mt-6">
                                <Title size="3">동영상 첨부</Title>
                                <Text size="1">링크 형태로 동영상을 첨부할 수 있습니다</Text>

                                {inputList.map((x, i) => {
                                    return (
                                        <>
                                            {inputList.length - 1 === i && (
                                                <Title
                                                    size="6"
                                                    onClick={handleAddClick}
                                                    className="text-right cursor-pointer text-dpurple-300"
                                                >
                                                    +추가하기
                                                </Title>
                                            )}
                                            <InputNoTitle
                                                key={i}
                                                placeholder="주소를 붙여 넣어 주세요"
                                                name="videoLink"
                                                value={x.videoLink}
                                                onChange={(e) => handleInputChange(e, i)}
                                            />

                                            <div className="col-start-1 row-start-1">
                                                {inputList.length !== 1 && (
                                                    <Text
                                                        size="1"
                                                        onClick={() => handleRemoveClick(i)}
                                                        className="rounded-full cursor-pointer text-dpurple-300"
                                                    >
                                                        지우기
                                                    </Text>
                                                )}
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className="col-span-4 col-start-2 row-start-6 mt-8">
                                <Title size="3">작품 설명</Title>
                                <InputNoTitle
                                    placeholder={contentTemp ? contentTemp : "작품에 대한 설명을 입력해주세요(선택)"}
                                    name="description"
                                    value={inputs.description}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-2 col-start-2 row-start-7">
                                {/* <Tooltip title={copyrightText} placement='left'>
                                <Badge badgeContent={"?"} color='secondary'>

                                        
                                    </Badge>
                                </Tooltip> */}

                                <div className="flex flex-row">
                                    <Title size="3">저작권</Title>
                                    {/* <Tooltips>
                                        <B>🐧</B>
                                    </Tooltips> */}
                                </div>

                                <select
                                    onChange={selectCopyRight}
                                    value={CopyRight}
                                    className="form-select appearance-none
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-xl font-min2
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding bg-no-repeat
                                                border border-solid border-gray-300
                                                rounded-md 
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700 focus:bg-white focus:border-dpurple-300 focus:outline-none"
                                >
                                    <option value="" defaultValue disabled hidden>
                                        선택해주세요
                                    </option>
                                    {copyrightOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-2 col-start-2 row-start-8">
                                <Title size="3">
                                    공개여부<span className="font-bold text-purple-600"> *</span>
                                </Title>
                                <select
                                    onChange={selectPublic}
                                    value={Public}
                                    className="form-select appearance-none
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-lg font-min2
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding bg-no-repeat
                                                border border-solid border-gray-300
                                                rounded-md 
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700 focus:bg-white focus:border-dpurple-300 focus:outline-none"
                                >
                                    <option value="" defaultValue disabled hidden>
                                        선택해주세요
                                    </option>
                                    {publicOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="flex items-end justify-end gap-3 p-5">
                                    <Button size="2" color="1" onClick={createArtWork}>
                                        완료
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default ArtWorkCreateModal;
