import React, { useState } from "react";
import Portal from "../../elements/Tools/Portal";
import {
    Image,
    Input,
    CheckBox,
    SelectBox,
    MultiSelect,
    SelectBoxFor12,
  } from "../../elements";

const ArtWorkCreateModal = ({ onClose }) => {
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
    return (
        <Portal>
            <div className="absolute z-10 w-full h-full bg-gray-500 bg-opacity-80">
            <div className="z-20 flex w-5/6 mx-auto my-20 text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto h-5/6 modal-content">
            <div className="flex-shrink-0 h-full p-4 bg-yellow-300 modal-header rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                작성하기
              </h5>
              <button
                type="button"
                className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="grid w-full h-full grid-cols-3 grid-rows-6 p-4 overflow-y-scroll bg-yellow-500 modal-body"
            >
              <div className="invisible md:visible md:fixed">
                <Image shape="big_square" />
              </div>
              <div
                className="grid items-center h-screen grid-cols-6 col-span-2 col-start-1 col-end-4 row-start-1 bg-yellow-100 md:col-start-2 grid-rows-10"
              >
                <div className="col-span-4 col-start-2 col-end-6 row-start-1">
                  {/* <Input title="타이틀" value={name.value} onChange={name.onChange} /> */}
                  <p>타이틀</p>
                  <input type="text" name = "title" onChange={handleChange}/>
                </div>
                <div className="col-span-4 col-start-2 row-start-2">
                  <p>카테고리</p>
                  <div className="flex flex-row flex-wrap items-center justify-center gap-5 p-3">
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="디자인" checked />
                    <CheckBox inline="디스플레이/디자인" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="ux/ui 디자인" checked />
                    <CheckBox inline="coffee디자인" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                    <CheckBox inline="저장" checked />
                  </div>
                </div>

                <div className="col-span-4 col-start-2">
                  {/* 사용 툴 */}
                  <MultiSelect/>
                </div>

                <div className="col-span-2 col-start-2 row-start-4">
                  시작 날짜
                  <input type="text" name="startDate"/>
                  <br/><br/><br/>
                  종료 날짜
                  <input type="text" name="endDate"/>
                  {/* <SelectBox
                    title="연도"
                    option01="2020"
                    option02="2021"
                    option03="2022"
                  />
                  <SelectBoxFor12
                    title="월"
                    option01="01"
                    option02="02"
                    option03="03"
                    option04="04"
                    option05="05"
                    option06="06"
                    option07="07"
                    option08="08"
                    option09="09"
                    option10="10"
                    option11="11"
                    option12="12"
                  /> */}
                </div>
                {/* <div className="col-span-2 col-start-4 row-start-4">
                  종료날짜
                  <SelectBox
                    title="연도"
                    option01="2020"
                    option02="2021"
                    option03="2022"
                  />
                  <SelectBoxFor12
                    title="월"
                    option01="01"
                    option02="02"
                    option03="03"
                    option04="04"
                    option05="05"
                    option06="06"
                    option07="07"
                    option08="08"
                    option09="09"
                    option10="10"
                    option11="11"
                    option12="12"
                  />
                </div> */}
                <div className="col-span-4 col-start-2 row-start-5">
                  작품 설명
                  <input type="textarea" name="description" onChange={handleChange}/>
                </div>

                <div className="col-span-2 col-start-2 row-start-6">
                  저작권
                  <SelectBox
                    title="저작권설정"
                    option01="판권소유"
                    option02="둘"
                    option03="둘"
                  />
                </div>

                <div className="col-span-2 col-start-4 row-start-6">
                  공개여부
                  <SelectBox
                    title="공개여부 설정"
                    option01="비공개"
                    option02="둘"
                    option03="둘"
                  />
                </div>
              </div>
            </div>

            <div></div>
          </div>
          </div>
        </Portal>
    )
}

export default ArtWorkCreateModal;
