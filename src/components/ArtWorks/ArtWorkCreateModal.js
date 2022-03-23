import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateNewArtWork } from "../../redux/modules/artWork";
import Portal from "../../elements/Tools/Portal";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { URL, token } from "../../redux/UrlForAxios";
import {
    Image,
    Input,
    CheckBox,
    SelectBox,
    SelectBoxFor12,
  } from "../../elements";

const ArtWorkCreateModal = ({ onClose }) => {
    const dispatch = useDispatch();

    const options = [
        {label: "일러스트레이터", value: "iller"},
        {label: "피그마", value: "figma"},
    ]
    const [image, setImage] = useState("");
    const handleFile = (e)=>{
        const file = e.target.files
        const reader = new FileReader();
        setImage(file[0]);
        // reader.readAsDataURL(file[0]);
        // reader.onload = () => {
        //   setImage(reader.result)
    // }
    }
    // const handleFile = (e) => {
    //     const file = e.target.files
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file[0]);
    //     reader.on
    // }
    const [toolSelected, setToolSelected] = useState([]);
    console.log(toolSelected);
    const [inputs, setInputs] = useState({
        title: "",
        category: "",
        start_date: "",
        end_date: "",
        description: "",
        copyright: "",
      });
      
    const {title, description} = inputs;
    
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
        // console.log(inputs);
      }
    

    
    const formData = new FormData();

    const createArtWork = () => {
      let data = {
        title: inputs.title,
        category: inputs.category,
        tool: toolSelected,
        work_start: inputs.startDate,
        work_end: inputs.endDate,
        content: inputs.description,
        copyright: inputs.copyright,
        is_master: false,
        thumnail: true,
        }
      formData.append("data", new Blob([JSON.stringify(data)], {type: "application/json"}))
      formData.append("imgFile", image);

      dispatch(CreateNewArtWork(formData));
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
                onClick={onClose}
                className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <form> */}
            <div
              className="grid w-full h-full grid-cols-3 grid-rows-6 p-4 overflow-y-scroll bg-yellow-500 modal-body"
            >
              <div className="invisible md:visible md:fixed">
                {/* <Image shape="big_square" /> */}
                <input type="file" onChange={handleFile} />
              </div>
              <div
                className="grid items-center h-screen grid-cols-6 col-span-2 col-start-1 col-end-4 row-start-1 bg-yellow-100 md:col-start-2 grid-rows-10"
              >
                <div className="col-span-4 col-start-2 col-end-6 row-start-1">
                  <p>타이틀</p>
                  <input type="text" name = "title" onChange={handleChange}/>
                </div>
                <div className="col-span-4 col-start-2 row-start-2">
                  <p>카테고리</p>
                  <div onChange={handleChange} className="flex flex-row flex-wrap items-center justify-center gap-5 p-3">
                      <input type="radio" name="category" value="ui"/>ui/ux
                      <input type="radio" name="category" value="typo"/>타이포그래피
                      <input type="radio" name="category" value="crafts"/>공예
                      <input type="radio" name="category" value="pakage"/>패키지
                      <input type="radio" name="category" value="graphic"/>그래픽
                      <input type="radio" name="category" value="fashion"/>패션
                      <input type="radio" name="category" value="video"/>영상
                      <input type="radio" name="category" value="product"/>제품
                      <input type="radio" name="category" value="game"/>게임/캐릭터
                      <input type="radio" name="category" value="branding"/>브랜딩/편집
                      <input type="radio" name="category" value="interior"/>건축/인테리어/환경
                      
                    {/* <CheckBox inline="저장" name="category" value="ui" checked />
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
                    <CheckBox inline="저장" checked /> */}
                  </div>
                </div>

                <div className="col-span-4 col-start-2">
                  {/* 사용 툴 */}
                  <MultiSelect options={options} value={toolSelected} labelledBy="Select" onChange={setToolSelected}/>
                </div>

                <div className="col-span-2 col-start-2 row-start-4">
                  시작 날짜
                  <input type="text" name="startDate" onChange={handleChange}/>
                  <br/><br/><br/>
                  종료 날짜
                  <input type="text" name="endDate" onChange={handleChange}/>
                </div>
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
            <button onClick={createArtWork}>완료</button>
            {/* </form> */}
          </div>
          </div>
        </Portal>
    )
}

export default ArtWorkCreateModal;
