import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewArtWork } from "../../redux/modules/artWork";
import { preview, artworkFiles } from '../../redux/modules/image';
import Portal from "../../elements/Tools/Portal";
import { MultiSelect } from "react-multi-select-component";
import Dropzone, {useDropzone} from 'react-dropzone';
import skillList from "./skillList";
import profile_upload from "../../static/images/profile_upload.svg";
import {
    Button,
    Card,
    Input,
    CheckBox,
    SelectBox,
    SelectBoxFor12,
  } from "../../elements";

const ArtWorkCreateModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const cover = useSelector((state) => state.image.url);
    const artworkfiles = useSelector((state) => state.image.artworkFiles);
    const [forSendCover, setForSendCover] = useState();
    const options = skillList;
    const [image, setImage] = useState("");
    // const handleFile = (e)=>{
    //     const file = e.target.files
    //     const reader = new FileReader();
    //     setImage(file[0]);
    // }
    const [toolSelected, setToolSelected] = useState([]);
    console.log(toolSelected);

    const [CopyRight, setCopyRight] = useState("");
    const copyrightOptions = [
      {value: "1", name: "판권 소유"},
      {value: "2", name: "zz"},
      {value: "3", name: "cc"},
    ]
    const CopyRightSelectBox = (props) => {
      return (
        <select onChange={selectCopyRight}>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
        </select>
      )
    }
    const selectCopyRight = (e) => {
      const { value, name } = e.target;
      setCopyRight(value);
    }
    // console.log(CopyRight);


    const [Public, setPublic] = useState("");
    const PublicOptions = [
      {value: "public", name: "공개"},
      {value: "private", name: "비공개"},
    ]
    const PublicSelectBox = (props) => {
      return (
        <select onChange={selectPublic}>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
        </select>
      )
    }
    const selectPublic = (e) => {
      const { value, name } = e.target;
      setPublic(value);
    }
    console.log(Public);

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
        console.log(inputs);
      }

    const onDrop = useCallback((acceptedFile) => {
        const reader = new FileReader();
        setForSendCover(acceptedFile[0]);
        reader.readAsDataURL(acceptedFile[0]);
        reader.onload = () => {
            dispatch(preview(reader.result));
        }
        
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    
    const formData = new FormData();

    const createArtWork = () => {
      let data = {
        title: inputs.title,
        category: inputs.category,
        tool: toolSelected,
        work_start: inputs.startDate,
        work_end: inputs.endDate,
        content: inputs.description,
        copyright: CopyRight,
        is_master: false,
        scope: Public,
        }
      formData.append("data", new Blob([JSON.stringify(data)], {type: "application/json"}))
      formData.append("imgFile", forSendCover);
      artworkfiles.forEach(element => formData.append("imgFile", element));
      console.log(formData);
      dispatch(CreateNewArtWork(formData));
    }

    

    return (
        <Portal>
            <div className="absolute z-10 w-full h-full bg-gray-500 bg-opacity-80">
            <div className="z-20 flex w-5/6 mx-auto my-20 text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto h-5/6 modal-content">
            <div className="h-full p-4 bg-white modal-header rounded-t-md">
              <button
                type="button"
                onClick={onClose}
                className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="grid w-full h-full col-start-2 p-4 overflow-y-scroll bg-white grid-span-2 modal-body"
            >
              <div className="mt-10">
              <p className="text-2xl">프로젝트 표지</p>
              <Dropzone multiple={false} accept={"image/gif, image/jpg, image/jpeg, image/png"} onDrop={onDrop}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {cover !== "" ? <Card size="6" types="image" src={cover}/>
                    : 
                    <>
                    <img src={profile_upload}/>
                    <p className="text-[#A1ADC0] text-center">Click or Drag&Drop</p>
                    </>
                    }
                  </div>
                </section>
              )}
            </Dropzone>
              </div>
              <div
                className="grid items-center h-screen grid-cols-6 col-span-2 col-start-1 col-end-4 row-start-1 bg-white md:col-start-2 grid-rows-10"
              >
                <div className="col-span-4 col-start-2 col-end-6 row-start-1">
                  <p className="text-2xl">프로젝트 제목<span className="font-bold text-purple-600"> *</span></p>
                  <input className="border border-gray-400 rounded-md focus:border-purple-400" size="70" height="40" placeholder="내용을 입력하세요" type="text" name = "title" onChange={handleChange}/>
                </div>
                <div className="col-span-4 col-start-2 row-start-2">
                  <p className="text-2xl">카테고리<span className="font-bold text-purple-600"> *</span></p>
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
                <p className="text-2xl">사용 툴<span className="font-bold text-purple-600"> *</span></p>
                  <MultiSelect options={options} value={toolSelected} labelledBy="Select" onChange={setToolSelected}/>
                </div>

                <div className="col-span-4 col-start-2 row-start-4">
                <p className="text-2xl">작업 기간<span className="font-bold text-purple-600"> *</span></p>
                  <input type="text" name="startDate" placeholder="YYYY.MM" onChange={handleChange}/>
                  <span> - </span>
                  <input type="text" name="endDate" placeholder="YYYY.MM" onChange={handleChange}/>
                </div>
                <div className="col-span-4 col-start-2 row-start-5">
                <p className="text-2xl">작품 설명</p>
                  <input type="textarea" name="description" size="100" onChange={handleChange}/>
                </div>

                <div className="col-span-2 col-start-2 row-start-6">
                <p className="text-2xl">저작권<span className="font-bold text-purple-600"> *</span></p>
                  <CopyRightSelectBox options={copyrightOptions}></CopyRightSelectBox>
                  {/* <SelectBox onChange={selectCopyRight}
                    title="선택해주세요"
                    option01="판권소유"
                    option02="둘"
                    option03="둘"
                  /> */}
                </div>
                  
                <div className="col-span-2 col-start-2 row-start-7">
                <p className="text-2xl">공개 여부<span className="font-bold text-purple-600"> *</span></p>
                  <PublicSelectBox options={PublicOptions}/>
                </div>
                <div className="grid place-content-end">
                <Button size="2" color="1"onClick={createArtWork}>완료</Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Portal>
    )
}


export default ArtWorkCreateModal;
