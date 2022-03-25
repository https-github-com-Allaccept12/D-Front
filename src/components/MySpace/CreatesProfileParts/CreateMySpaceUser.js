import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { preview } from '../../../redux/modules/image';
import { checknickname } from '../../../redux/modules/checkNickname';
import { createProfile } from '../../../redux/modules/createProfile';
import { Button, Input } from "../../../elements";
import set_profile from "../../../static/images/set_profile.svg";
import { useHistory, Link } from "react-router-dom";
import FileUpload from "../../../elements/Tools/FileUpload";
import { useInput } from "../../../hooks";


const CreateProfile = (props) => {
  const dispatch = useDispatch();
  let profile = useSelector((state) => state.image.url);
  let image = useSelector((state) => state.image.file);
  let tendencyResult = useSelector((state) => state.tendency.tendency);
  let interestResult = useSelector((state) => state.interests.interests);
  const [nicknameState, setNicknameState] = useState("");
  const nicknameValidMaxLen = (value) => value.length <= 10;
  const nickname = useInput("", [nicknameValidMaxLen]);
  const name = useInput("", []);
  const email = useInput("", []);
  const linkedIn = useInput("", []);
  const brunch = useInput("", []);
  const instagram = useInput("", []);
  const introduce = useInput("", []);
  const JobOptions = [
    { value: "UIUX", label: "UI & UX"},
    { value: "fashion", label: "패션"},
    { value: "typography", label: "타이포그래피"},
    { value: "crafts", label: "공예"},
    { value: "pakage", label: "패키지"},
    { value: "graphic", label: "그래픽"},
    { value: "video", label: "영상/모션"},
    { value: "product", label: "제품"},
    { value: "game", label: "게임/캐릭터"},
    { value: "branding", label: "브랜딩/편집"},
    { value: "interior", label: "건축/인테리어/환경"},
    { value: "student", label: "학생"},
  ]
  
  const [selected, setSelected] = useState("");
  const handleChangeSelect = (e) => {
    setSelected(e.target.value);
  }

  const checkNickname = () => {
    const map = {
      nickname: nickname.value
    }
    dispatch(checknickname({map, setNicknameState}));
  }

  const deleteProfile = () => {
    dispatch(preview(""));
  }

  const SendProfile = () => {
    const formData = new FormData();
    let data = {
      nickname: nickname.value,
      // intro_content: introduce.value,
      work_email: email.value,
      linked_in: linkedIn.value,
      brunch: brunch.value,
      insta: instagram.value,
      job: selected,
      phone_number: "010",
      work_time: "1",
    }
    formData.append("data", new Blob([JSON.stringify(data)], {type: "application/json"}));
    formData.append("profile_img", image);
    // dispatch(createProfile(data));
    dispatch(createProfile(formData));
  }

  return (

   <>


        <div className="grid grid-row-3 mt-10 gap-3">
          <div className="grid row-start-1 row-end-2 mb-10">
            <p className="text-2xl font-bold">내 정보</p>
            <div className="grid col-start-1 col-end-2 place-content-center">
            <FileUpload></FileUpload>
            {profile !== "" && <p onClick={deleteProfile} className='cursor-pointer text-center text-gray-300 hover:text-[#9262F7]'>삭제</p>}
            </div>
            <div className="grid col-start-2 col-end-3 gap-3">
              <Input cardSize="2" title="닉네임" onBlur={checkNickname} value={nickname.value} onChange={nickname.onChange} is_value={nickname.value.length} is_error={nickname.errors} maxLen="10"></Input>
              {nicknameState == "available" && <p className="pr-16 text-xs text-right">✔️</p>}
              {nicknameState == "fail" && <p className="pr-16 text-xs text-right text-red-600">이미 사용 중인 닉네임 입니다.</p>}
              <Input cardSize="2" title="이름" value={name.value} onChange={name.onChange} is_value={name.value.length}></Input>
              <div className="grid items-center justify-start">
                <p className= "w-1/2 row-start-1 mr-10 font-min1">직업</p>
                <select className="row-start-1" onChange={handleChangeSelect} vlaue={selected}>
                  {JobOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid row-start-2 row-end-3 gap-3">
            <p className="text-2xl font-bold">연락처</p>
            <Input cardSize="2" title="이메일" value={email.value} onChange={email.onChange} is_value={email.value.length}></Input>
            <Input cardSize="2" title="링크드인" value={linkedIn.value} onChange={linkedIn.onChange} is_value={linkedIn.value.length}></Input>
            <Input cardSize="2" title="브런치" value={brunch.value} onChange={brunch.onChange} is_value={brunch.value.length}></Input>
            <Input cardSize="2" title="인스타그램" value={instagram.value} onChange={instagram.onChange} is_value={instagram.value.length}></Input>
          </div>
          {/* <div className="grid row-start-3 row-end-4">
            <p className="text-2xl font-bold">소개</p>
            <Input cardSize="1" title="한 줄 소개" value={introduce.value} onChange={introduce.onChange} is_value={introduce.value.length}></Input>
          </div> */}
        </div>

      <div className="grid w-full py-10 bg-white place-items-center">

      </div>
      <Link to="/CompleteProfile">
          <Button size="2" color="1" onClick={SendProfile}>작성 완료</Button>
        </Link>
      </>
     


  );
};

export default CreateProfile;