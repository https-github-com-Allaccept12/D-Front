import React, { useState } from "react";
import {
  Image,
  Input,
  CheckBox,
  SelectBox,
  MultiSelect,
  SelectBoxFor12,
} from "../../elements";

import { useInput } from "../../hooks";
import { useHistory } from "react-router-dom";
import { Button } from "../../elements";
import ArtWorkCreateModal from "./ArtWorkCreateModal";
import { Portal } from "@mui/material";

const ArtWorkCreate = (props) => {
  let history = useHistory();
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  // const validMaxLen = (value) => value.length <= 300;
  // const description = useInput("", [validMaxLen]);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  
  const {title, description} = inputs;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

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

  const submitHandler = (e) => {
    console.log('sdf');
    e.preventDefault();
    let body = {
      title: inputs.title,
      description: inputs.description,
    }
    console.log(body);
  }

  return (
    <>
      <div className="z-0 bs-gray-200">
        <div className="">작업 업로드</div>
        <div className="flex flex-row">
          <div className="">
            업로드
          </div>
          <div className="">
            이미지 추가
          </div>
        </div>
        <div className=""></div>
        <div className="">
          <Button size="2" onClick={handleModal}>다음</Button>
            <Portal>
              {modalOn && <ArtWorkCreateModal onClose={handleModal}/>}
            </Portal>
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
