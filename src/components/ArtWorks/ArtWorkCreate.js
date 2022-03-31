import React, { useState, useCallback } from "react";
import { artworkFiles } from "../../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Card } from "../../elements";
import ArtWorkCreateModal from "./ArtWorkCreateModal";
import { Portal } from "@mui/material";
import ArtWorkChangeList from "./ArtWorkChangeList";

const ArtWorkCreate = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [previews, SetPreviews] = useState([]);
    const [modalOn, setModalOn] = useState(false);

    const handleModal = () => {
        setModalOn(!modalOn);
        dispatch(artworkFiles(images));
    };

    const onDrop = useCallback((acceptedFile) => {
        for (let file of acceptedFile) {
            setImages((zz) => [...zz, file]);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                SetPreviews((temp) => [...temp, reader.result]);
            };
        }
    }, []);
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <>
            <div className="z-0 grid w-full h-screen grid-cols-12 grid-rows-6 bs-gray-200">
                <div className="grid col-span-1"></div>
                <div className="grid col-span-10 col-start-3 row-span-1 row-start-1 mt-20 h-fit">작업 업로드</div>
                <div className="grid col-span-10 col-start-2 row-span-6 row-start-2 h-5/6">
                    <div className="grid w-full xl:w-4/5 col-span-7 col-start-2 row-start-1 row-end-7 border-2 border-dpurple-200 border-dashed place-content-center h-fit min-h-[40rem]">
                        <div className="w-full">
                            <Dropzone
                                maxFiles={10}
                                accept={"image/gif, image/jpg, image/jpeg, image/png"}
                                onDrop={onDrop}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div className="flex flex-col justify-center items-center" {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <>
                                                <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
                                                <p>파일은 복수로 첨부 가능하며, 최대 20MB까지 업로드 됩니다.</p>
                                            </>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        </div>
                        <div className="z-10">
                            <ArtWorkChangeList list={previews} />
                        </div>
                    </div>
                    <div className="hidden xl:contents">
                        <div className="grid col-span-1 col-start-8 row-start-1">이미지 추가</div>
                        <div className="grid col-span-1 col-start-8 row-start-2">동영상 추가</div>
                        <div className="grid col-span-1 col-start-8 row-start-3">파일 순서 변경</div>
                    </div>
                </div>
                <div className=""></div>
                <div className="fixed bottom-10 right-10 xl:bottom-24 xl:right-24">
                    <Button color="4" size="3" onClick={handleModal}>
                        다음
                    </Button>
                    <Portal>{modalOn && <ArtWorkCreateModal onClose={handleModal} />}</Portal>
                </div>
            </div>
        </>
    );
};

export default ArtWorkCreate;
