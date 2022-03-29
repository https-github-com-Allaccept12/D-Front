import React, { useState, useCallback } from "react";
import { artworkFiles } from "../../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Card } from "../../elements";
import ArtWorkCreateModal from "./ArtWorkCreateModal";
import { Portal } from "@mui/material";

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
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    // const validMaxLen = (value) => value.length <= 300;
    // const description = useInput("", [validMaxLen]);
    // const [inputs, setInputs] = useState({
    //   title: "",
    //   description: "",
    // });

    // const {title, description} = inputs;

    // const handleChange = (e) => {
    //   const { value, name } = e.target;
    //   setInputs({
    //     ...inputs,
    //     [name]: value
    //   });
    // }

    // console.log(inputs.title);
    // console.log(inputs.description);

    // const titleHandler = (e) => {
    //   e.preventDefault();
    //   SetTitle(e.target.value);
    // }

    // const descriptionHandler = (e) => {
    //   e.preventDefault();
    //   SetDescription(e.target.value);
    // }

    // const submitHandler = (e) => {
    //   console.log('sdf');
    //   e.preventDefault();
    //   let body = {
    //     title: inputs.title,
    //     description: inputs.description,
    //   }
    //   console.log(body);
    // }

    return (
        <>
            <div className="z-0 grid w-full h-screen grid-cols-12 grid-rows-6 bs-gray-200">
                <div className="grid col-span-1"></div>
                <div className="grid col-span-10 col-start-3 row-span-1 row-start-1 mt-20 h-fit">작업 업로드</div>
                <div className="grid col-span-10 col-start-2 row-span-6 row-start-2 h-5/6">
                    <div className="grid w-full xl:w-4/5 col-span-7 col-start-2 row-start-1 row-end-7 border-2 border-indigo-400 border-dashed place-content-center h-fit min-h-[40rem]">
                        <Dropzone maxFiles={10} accept={"image/gif, image/jpg, image/jpeg, image/png"} onDrop={onDrop}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div className="flex flex-col" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {previews.length > 0 ? (
                                            previews.map(function (a) {
                                                return <Card size="6" types="image" src={a} />;
                                            })
                                        ) : (
                                            <>
                                                <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
                                                <p>파일은 복수로 첨부 가능하며, 최대 20MB까지 업로드 됩니다.</p>
                                            </>
                                        )}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
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
                {/* <div className="grid items-center w-full grid-cols-3 col-start-1 col-end-4 grid-rows-4 justify-items-center">
          작업업로드
          <div className="col-start-2 row-start-2 ">
            <p className="bg-yellow-300">파일 추가</p>
            <p>업로드 됩니다</p>
          </div>
        </div>
        <div className="w-full col-start-4 bg-yellow-300">
          <div className="grid w-full h-screen grid-cols-3 grid-rows-6 justify-items-center">
            <div className="col-span-2 row-start-2 space-y-3">
              <Button
                size="1"
                color="1"
                icon
                name="Private"
                iconSize="16"
                iconColor=""
              >
                이미지 추가
              </Button>
              <Button
                size="1"
                color="1"
                icon
                name="Private"
                iconSize="16"
                iconColor=""
              >
                동영상 추가
              </Button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                <Button
                  size="1"
                  color="1"
                  icon
                  name="Private"
                  iconSize="16"
                  iconColor=""
                >
                  순서를 변경
                </Button>
              </button>
            </div>
          </div>
        </div> */}
            </div>
            {/* <div className="sticky bottom-0 w-full h-20 bg-orange-400">
        <div className="flex justify-end gap-4">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            
          </button>

          <Button>임시저장</Button>
        </div>
      </div> */}

            {/* <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
              <p>여기에서 아마 이미지 순서 변경.</p>
              <p>구현은 고민중.</p>
              <p>일단 완성</p>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
        </>
    );
};

export default ArtWorkCreate;
