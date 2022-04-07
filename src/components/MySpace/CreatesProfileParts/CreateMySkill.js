import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editSkills } from "../../../redux/modules/editProfile";
import { Button, Title, SkillThumbnail } from "../../../elements";
import skillList from "../../ArtWorks/skillList";
import { MultiSelect } from "react-multi-select-component";
import tw from "tailwind-styled-components";
import { formControlUnstyledClasses } from "@mui/base";

const Box = tw.div`
col-start-2 col-span-full justify-center items-center
`;
const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10
`;

// 메인스킬과 보조스킬 분리
const CreateMySkill = (props) => {
  const {info} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = skillList;
  let main = "";
  let sub = "";
  const [toolSelectedMain, setToolSelectedMain] = useState([]);
  const [toolSelectedSub, setToolSelectedSub] = useState([]);
  useEffect(() => {
    if(info){
      main = info.specialty;
      if (main.length > 2){
        var mainTemp = main.split('/');
        for (var i in mainTemp){
          var dic = {}
          dic['label'] = mainTemp[i];
          dic['value'] = mainTemp[i];
          if (i == 0) {
            toolSelectedMain.pop();  
          }
          toolSelectedMain.push(dic);
        }
      } 
      sub = info.other_specialty;
      if (main.length > 2){
        var subTemp = sub.split('/');
        for (var i in subTemp){
          var dic = {}
          dic['label'] = subTemp[i];
          dic['value'] = subTemp[i];
          if (i == 0) {
            toolSelectedSub.pop();
          }
          toolSelectedSub.push(dic);
        }
      }
    }
  }, [])
  // console.log(toolSelectedMain);
  const mainSpecialty = [];
  for (var value of toolSelectedMain) {
    mainSpecialty.push(value.value);
  }

  const subSpecialty = [];
  for (var value of toolSelectedSub) {
    subSpecialty.push(value.value);
  }


  const SendSkill = () => {
    if (mainSpecialty.length > 4){
      alert('대표 스킬은 최대 4개까지 설정 가능합니다.')
      
    } else{
      const main = mainSpecialty.join('/');
      const sub = subSpecialty.join('/');
      let data = {
        specialty: main,
        other_specialty: sub,
      };
      // console.log(data);
      dispatch(editSkills(data));
      navigate(-1);
    }
  };

  return (
    <>
      <div className="grid w-full grid-cols-3 gap-3">
        <Title size="4">MY SKILLS</Title>

        <Title size="6" className="col-start-1">
          대표스킬
        </Title>
        <Box>
          {" "}
          <MultiSelect
            options={options}
            value={toolSelectedMain}
            labelledBy="Select1"
            onChange={setToolSelectedMain}
          />
        </Box>

        <Title size="6" className="col-start-1">
          보유스킬
        </Title>
        <Box>
          <MultiSelect
            options={options}
            value={toolSelectedSub}
            labelledBy="Select2"
            onChange={setToolSelectedSub}
          />
        </Box>

        {/* <InnerLine /> */}

        {/* <Title size="4">작업기간</Title>

        <div className="bg-yellow-300 w-full h-[23rem] col-start-1 col-span-full">
          {" "}
          타임테이블
        </div> */}
      </div>
      <div className="mt-10">
        <Button onClick={SendSkill}>
          저장
        </Button>
      </div>
    </>
  );
};

export default CreateMySkill;
