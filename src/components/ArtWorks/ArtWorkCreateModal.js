import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { CreateNewArtWork } from "../../redux/modules/artWork";
import { preview } from '../../redux/modules/image';
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
    // 기본 세팅
    const history = useHistory();
    const dispatch = useDispatch();
    // 작품 이미지들 리덕스에서 불러옴
    const artworkfiles = useSelector((state) => state.image.artworkFiles);

    // 표지 ------------------------------------------------------------------------
    // 리덕스에서 불러옴
    const cover = useSelector((state) => state.image.url);
    // useState
    const [forSendCover, setForSendCover] = useState();
    // 이미지 처리 함수
    const onDrop = useCallback((acceptedFile) => {
      const reader = new FileReader();
      setForSendCover(acceptedFile[0]);
      reader.readAsDataURL(acceptedFile[0]);
      reader.onload = () => {
          dispatch(preview(reader.result));
      }
      
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    // 사용툴-------------------------------------------------------------------------
    // options
    const options = skillList;
    // useState
    const [toolSelected, setToolSelected] = useState([]);
    // string으로 변환 
    let specialty = "";
    for(var value of toolSelected){
      specialty += value.value;
    }
    console.log(specialty);
    
    // 저작권-------------------------------------------------------------------------
    // useState
    const [CopyRight, setCopyRight] = useState("");
    // options
    const copyrightOptions = [
      {value: "판권 소유", label: "판권 소유"},
      {value: "저작자 표시", label: "저작자 표시"},
      {value: "저작자 표시 - 비영리", label: "저작자 표시 - 비영리"},
      {value: "저작자 표시 - 변경 금지", label: "저작자 표시 - 변경 금지"},
      {value: "저작자 표시 - 동일 조건 변경 허락", label: "저작자 표시 - 동일 조건 변경 허락"},
      {value: "저작자 표시 - 비영리 - 동일 조건 변경 허락", label: "저작자 표시 - 비영리 - 동일 조건 변경 허락"},
      {value: "저작자 표시 - 비영리 - 변경 금지", label: "저작자 표시 - 비영리 - 변경 금지"},
    ]
    // 선택 변경 실행 함수
    const selectCopyRight = (e) => {
      setCopyRight(e.target.value);
    }

    // 공개 여부 ------------------------------------------------------------------------
    // useState
    const [Public, setPublic] = useState("");
    // options
    const publicOptions = [
      {value: true, label: "공개"},
      {value: false, label: "비공개"},
    ]
    // selectBox 컴포넌트
    // const PublicSelectBox = (props) => {
    //   return (
    //     <select onChange={selectPublic}>
    //       {props.options.map((option) => (
    //         <option key={option.value} value={option.value}>{option.name}</option>
    //       ))}
    //     </select>
    //   )
    // }
    // select 실행함수
    const selectPublic = (e) => {
      setPublic(e.target.value);
    }
    // 타이틀, 카테고리, 시작 및 종료 날짜, 설명  ----------------------------------------
    // useState
    const [inputs, setInputs] = useState({
        title: "",
        category: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    const {title, description, startDate, endDate, category} = inputs;
    // onChange 실행 함수
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
        // console.log(inputs);
      }
  

    // 서버에 보내기 전 data에 json형식으로 모아주기 --------------------------------------------
    let data = {
      title: inputs.title,
      category: inputs.category,
      specialty: specialty,
      work_start: inputs.startDate,
      work_end: inputs.endDate,
      content: inputs.description,
      copyright: CopyRight,
      is_master: false,
      scope: Public,
      }
    console.log(data);
    
    // 멀티 폼데이터 생성
    const formData = new FormData();

    // 다음 버튼 클릭 시 실행 함수
    const createArtWork = () => {
      
      // console.log(data);
      formData.append("data", new Blob([JSON.stringify(data)], {type: "application/json"}))
      formData.append("imgFile", forSendCover);
      artworkfiles.forEach(element => formData.append("imgFile", element));
      // console.log(formData);
      dispatch(CreateNewArtWork(formData));
      history.replace('/art/list/all');
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
                  <select onChange={selectCopyRight} vlaue={CopyRight}>
                    <option value="" selected disabled hidden>선택해주세요</option>
                    {copyrightOptions.map((item, index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </div>
                  
                <div className="col-span-2 col-start-2 row-start-7">
                <p className="text-2xl">공개 여부<span className="font-bold text-purple-600"> *</span></p>
                  <select onChange={selectPublic} vlaue={Public}>
                    <option value="true" selected hidden>공개</option>
                    {publicOptions.map((item, index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                    ))}
                  </select>
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
