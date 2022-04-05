import React, { useState, useCallback, useEffect } from "react";
import { artworkFiles } from "../../redux/modules/image";
import { ModifyArtWork } from "../../redux/modules/artWork";
import { useDispatch, useSelector } from "react-redux";
import { preview } from "../../redux/modules/image";
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
    // let artwork_id = "";
    // let isEdit = false;
    const [isEdit, setIsEdit] = useState(false);
    const [artwork_id, setArtworkId] = useState("");
    // const [info, setInfo] = useState();
    const [firstList, setFirstList] = useState([]);
    // const [firstThumbnail, setFirstThumbnail] = useState([]);
    const [previews, SetPreviews] = useState([]);
    console.log(location.location);
    const editImgs = useSelector((state) => state.artwork.modifyForPreview);
    const info = useSelector((state) => state.artwork.modifyForInfo);
    const firstThumbnail = useSelector((state) => state.image.url);
    useEffect(() => {
        if (location.location.state){
            const visitor_account_id = sessionStorage.getItem("account_id");
            setArtworkId(location.location.state.artwork_id);
            setIsEdit(location.location.state.isedit);
            // setFirstList(editImgs && editImgs.img);
            // setFirstThumbnail(editImgs && editImgs.artWorkSubDetail.thumbnail);
            // if(firstList){ 
            // for(let pres of firstList){
            //     console.log('item:', pres);
            //     previews.push(pres);
            //     // SetPreviews((temp) => [...temp, pres]);
            // }
            // console.log('before preview:', previews);
            // dispatch(preview(firstThumbnail));
            // if (isEdit){
            //     dispatch(ModifyArtWork({artwork_id, visitor_account_id, dispatch}));
            // }
        // }
    }
    }, [editImgs])

    useEffect(() => {
        SetPreviews(editImgs);
    }, [editImgs]);

    // console.log('isEdit', isEdit, artwork_id);
    const [images, setImages] = useState([]);
    const [modalOn, setModalOn] = useState(false);
    const [deleteList, setDeleteList] = useState([]);
    console.log(deleteList);
    console.log('deleteList: ', deleteList);
    console.log('ediimgs: ', editImgs);
    console.log('firstThumbnail: ', firstThumbnail);
    console.log('info: ', info);

    // useEffect(() => {
    //     console.log('firstList', firstList);
    //     if(firstList){ 
    //         for(let pres of firstList){
    //             console.log('item:', pres);
    //             previews.push(pres);
    //             // SetPreviews((temp) => [...temp, pres]);
    //         }
    //         console.log('before preview:', previews);
    //         dispatch(preview(firstThumbnail));

    //     }
    // }, [])
    // console.log(previews);
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

    console.log(images);
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
                                <ArtWorkChangeList list={previews} setPreviews={SetPreviews} firstThumbnail={firstThumbnail} isEdit={isEdit} setDeleteList={setDeleteList}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <Button color="4" size="3" onClick={handleModal}>
                            다음
                        </Button>
                        <Portal>{modalOn && <ArtWorkCreateModal onClose={handleModal} info={info}  isEdit={isEdit} deleteList={deleteList} artwork_id={artwork_id} />}</Portal>
                    </div>
                </Grid>
            </div>
        </>
    );
};

export default ArtWorkCreate;
