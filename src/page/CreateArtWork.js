import React from "react";
import {  Image, Input, CheckBox, SelectBox, MultiSelect } from "../elements";

import { useHistory } from "react-router-dom";
import { ImageBtn } from "../elements";


const CreateArtWork = (props) => {
  let history = useHistory();

  return (
    <>
<div className="grid grid-cols-4 w-full h-screen bg-slate-600">
    <div className="grid grid-rows-4 grid-cols-3 w-full col-start-1 col-end-4 justify-items-center items-center">
        작업업로드
    <div className="row-start-2 col-start-2 ">
        <p className="bg-yellow-300">파일 추가</p>
    <p>업로드 됩니다</p>
    </div>

    </div>
    <div className="col-start-4 w-full bg-yellow-300">
        <div className="grid w-full h-screen grid-cols-3 grid-rows-6 justify-items-center">
            <div className="row-start-2 col-span-2 space-y-3">
                <ImageBtn/>
                <ImageBtn/>
                <ImageBtn/>
            </div>

        </div>
    </div>


</div>
<div className="bg-orange-400 w-full h-20 sticky bottom-0">
    <div className="flex justify-end gap-4">
        
    <button type="button"
  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#staticBackdrop">다음</button>
    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">선택</button>
    </div>
</div>




<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <p>여기에서 아마 이미지 순서 변경.</p>
        <p>구현은 고민중.</p>
        <p>일단 완성</p>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>





<div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none
  overflow-y-scroll max-h-max
"
  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog min-w-full min-h-fit pointer-events-none bg-white">
    <div
      className="modal-content border-none shadow-lg w-full pointer-events-auto rounded-md outline-none text-current">
      <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4  bg-yellow-300 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
          작성하기
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body grid p-4 w-full h-96 bg-yellow-500
      grid-cols-3 overflow-y-scroll">
          <div className="fixed">
          <Image shape="big_square"/>
          </div>
          <div className="start-col-2 col-end-4 bg-yellow-100 col-span-2
           grid grid-cols-5 grid-rows-10 h-screen">
            <div className="col-start-2 row-start-2 col-span-3">
                <Input label="이미지제목"/>
                </div>
                <div className="col-start-1 row-start-3 col-span-5">
                <p>카테고리</p>
<div className="p-3 flex flex-row gap-5 flex-wrap justify-center items-center">
    <CheckBox label="저장" checked />
    <CheckBox label="디자인" checked />
    <CheckBox label="디스플레이/디자인" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="ux/ui 디자인" checked />
    <CheckBox label="coffee디자인" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />
    <CheckBox label="저장" checked />

</div>

</div>

<div className="col-start-1 row-start-4 col-span-4">
여기에 사용 툴
<MultiSelect />

</div>

<div className="col-start-1 row-start-5 col-span-4">
날짜를 자체제작
<SelectBox title="연도" option01="2020" option02="2021" option03="2022" />
<SelectBox title="월" option01="2020" option02="2021" option03="2022" />
</div>
<div className="col-start-1 row-start-6 col-span-4">
작품 설명
<Input textarea size_textarea="3"/>
</div>

<div className="col-start-1 row-start-7 col-span-2">
저작권
<SelectBox title="저작권설정" option01="판권소유" option02="둘" option03="둘" />
</div>

<div className="col-start-3 row-start-7 col-span-2">
공개여부
<SelectBox title="공개여부 설정" option01="비공개" option02="둘" option03="둘" />
</div>

                </div>

                
           
          </div>
          
            <div>

            </div>
      </div>




      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">닫기</button>
        <button type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">막아놨어여</button>
      </div>
    </div>
  </div>


    
    </>
  );
};

export default CreateArtWork;