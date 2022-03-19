import React, {ChangeEvent} from "react";
import { useSelector, useDispatch } from "react-redux";
import { preview } from '../redux/modules/image';
import { Button, Title, Image, Input, Text, Image as CircleImage } from "../elements";
import set_profile from "../static/images/set_profile.svg";
import { useHistory, Link } from "react-router-dom";
import FileUpload from "../elements/Tools/FileUpload";
// import profile_upload from "../static/images/profile_upload.svg";


const CreateProfile = (props) => {
  let profile = useSelector((state) => state.image.url);
  const dispatch = useDispatch();
  const deleteProfile = () => {
    dispatch(preview(""));
  }
  const JobOptions = [
    { value: 0, label: "UI & UX"},
    { value: 1, label: "패션"},
    { value: 2, label: "타이포그래피"},
    { value: 3, label: "공예"},
    { value: 4, label: "패키지"},
    { value: 5, label: "그래픽"},
    { value: 6, label: "영상/모션"},
    { value: 7, label: "제품"},
    { value: 8, label: "게임/캐릭터"},
    { value: 9, label: "브랜딩/편집"},
    { value: 10, label: "건축/인테리어/환경"}
  ]

  return (

    <div className="bg-gradient-to-r from-[#9262F7] to-[#7681FB] grid place-content-center w-full h-screen">
      <div className="grid bg-white">
        <div className="grid col-start-1 col-end-2">
          <img src={set_profile}/>
          <p className="text-2xl font-bold">님의 프로필을 구성해 볼까요?</p>
          <span>다른 이용자님들에게 보여질 프로필입니다.<br/>설정하신 프로필은 어쩌구저쩌구</span>
        </div>
        <div className="grid col-start-2 col-end-3 mt-10">
          <div className="grid row-start-1 row-end-2 mb-10">
            <p className="text-2xl font-bold">내 정보</p>
            <div className="grid col-start-1 col-end-2 place-content-center">
            <FileUpload></FileUpload>
            {profile !== "" && <p onClick={deleteProfile} className='cursor-pointer text-center text-gray-300 hover:text-[#9262F7]'>삭제</p>}
            </div>
            <div className="grid col-start-2 col-end-3">
              <Input cardSize="2" title="아이디"></Input>
              <Input cardSize="2" title="이름"></Input>
              <div className="grid items-center justify-start">
                <p className= "w-1/2 row-start-1 mr-10 font-min1">직업</p>
                <select className="row-start-1" onChange>
                  {JobOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid row-start-2 row-end-3">
            <p className="text-2xl font-bold">연락처</p>
            <Input cardSize="2" title="이메일"></Input>
            <Input cardSize="2" title="링크드인"></Input>
            <Input cardSize="2" title="브런치"></Input>
            <Input cardSize="2" title="인스타그램"></Input>
          </div>
          <div className="grid row-start-3 row-end-4">
            <p className="text-2xl font-bold">소개</p>
            <Input cardSize="1" title="한 줄 소개"></Input>
          </div>
        </div>
      </div>
      <div className="grid w-full py-10 bg-white place-items-center">
        <Link to="/CompleteProfile">
          <Button size="2" color="1">작성 완료</Button>
        </Link>
      </div>
{/* <button className="col-start-5"><Link to="/">다음으로 넘어가기</Link></button>
</div>

<div className="grid w-full h-screen grid-cols-4 p-4 bg-yellow-500 modal-body">
          <div className="absolute">
          <Image shape="big_square"/>
          프로필
          </div>
          <div className="grid items-center h-full grid-cols-5 col-span-4 grid-rows-3 bg-yellow-100 md:col-start-2 justify-items-center">
               <div className="col-span-3 col-start-2 row-start-1">
               <Image size="5xl" />
               </div>
               
                <div className="col-span-2 col-start-3 row-start-1">
                <Input label="아이디" />
                <Input label="이름"/>
                <Input label="직업"/>
                </div>

                <div className="w-full col-span-3 col-start-2 row-start-2">
                연락처
                <Input label="이메일" />
                <Input label="링크드인"/>
                <Input label="브런치"/>
                <Input label="인스타"/>
                </div>

                <div className="w-full col-span-3 col-start-2 row-start-3">
                소개
                <Input textarea />
                </div>

                <div className="w-full col-span-2 col-start-5 row-start-4">
                <Button>입력 완료!</Button>
                </div>

               </div> */}
    </div>
     


  );
};

export default CreateProfile;