import React, { useState, useCallback, useEffect } from "react";
import { artworkFiles } from "../../redux/modules/image";
import { ModifyArtWork } from "../../redux/modules/artWork";
import { useDispatch, useSelector } from "react-redux";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Title, Text } from "../../elements";
import ArtWorkCreateModal from "./ArtWorkCreateModal";
import { Portal } from "@mui/material";
import ArtWorkChangeList from "./ArtWorkChangeList";
import tw from "tailwind-styled-components";

const Grid = tw.div`
 bg-white w-full xl:p-10
`;

const ArtWorkCreate = (location) => {
    const dispatch = useDispatch();
    let artwork_id = "";
    let isEdit = false;
    useEffect(() => {
        if (location.location.state){
            const visitor_account_id = sessionStorage.getItem("account_id");
            artwork_id = location.location.state.artwork_id;
            isEdit = location.location.state.isedit;
            if (isEdit){
                dispatch(ModifyArtWork({artwork_id, visitor_account_id, dispatch}));
            }
        }
        
    }, [])
    
    const editImgs = useSelector((state) => state.artwork.modifyForPreview);
    console.log(editImgs);
    const [images, setImages] = useState([]);
    const [previews, SetPreviews] = useState([]);
    const [modalOn, setModalOn] = useState(false);

    useEffect(() => {
        if(editImgs){
            for(var item of editImgs.img){
                SetPreviews((temp) => [...temp, item.img_url]);
            }
        }
    }, [])
    console.log(previews);
    const handleModal = () => {
        if(!modalOn & previews.length === 0){
            alert('아 이미지 추가하셈');
            return
        }
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
            <div className="flex flex-col w-full bg-gray-200 xl:p-10">
                <Title size="3" className="flex items-start justify-start text-left xl:py-10">
                    작업 업로드
                </Title>
                <Grid>
                    <div className="row-span-6 row-start-2 my-5 h-5/6">
                        <div className="grid w-full col-span-7 col-start-2 row-start-1 row-end-7 border-2 border-dgray-300 border-dashed place-content-center h-fit min-h-[40rem] rounded-md">
                            <div className="w-full">
                                <Dropzone
                                    maxFiles={10}
                                    accept={"image/gif, image/jpg, image/jpeg, image/png"}
                                    onDrop={onDrop}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div
                                                className="flex flex-col items-center justify-center p-5"
                                                {...getRootProps()}
                                            >
                                                <input {...getInputProps()} />
                                                <>
                                                    <Text size="1" className="text-[#A1ADC0] text-center animate-pulse">
                                                        Click or Drag & Drop here
                                                    </Text>
                                                    <Text size="3">
                                                        파일은 복수로 첨부 가능하며, 최대 20MB까지 업로드 됩니다.
                                                    </Text>
                                                </>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            <div className="">
                                <ArtWorkChangeList list={previews} setPreviews={SetPreviews} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <Button color="4" size="3" onClick={handleModal}>
                            다음
                        </Button>
                        <Portal>{modalOn && <ArtWorkCreateModal onClose={handleModal} />}</Portal>
                    </div>
                </Grid>
            </div>
        </>
    );
};

export default ArtWorkCreate;
