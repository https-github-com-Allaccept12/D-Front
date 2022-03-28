import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSkills } from "../../../redux/modules/editProfile";
import { Button, Title, SkillThumbnail } from "../../../elements";
import skillList from "../../ArtWorks/skillList";
import { MultiSelect } from "react-multi-select-component";
import tw from "tailwind-styled-components";

const Box = tw.div`
col-start-2 col-span-full justify-center items-center
`;
const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10
`;

// 메인스킬과 보조스킬 분리
const CreateMySkill = (props) => {
  const dispatch = useDispatch();
  const options = skillList;
  const [toolSelectedMain, setToolSelectedMain] = useState([]);
  const [toolSelectedSub, setToolSelectedSub] = useState([]);

  const mainSpecialty = [];
  for (var value of toolSelectedMain) {
    mainSpecialty.push(value.value);
  }

  const subSpecialty = [];
  for (var value of toolSelectedSub) {
    subSpecialty.push(value.value);
  }

  console.log(mainSpecialty);

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
      console.log(data);
      dispatch(editSkills(data));
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
          다음
        </Button>
      </div>
    </>
  );
};

export default CreateMySkill;
