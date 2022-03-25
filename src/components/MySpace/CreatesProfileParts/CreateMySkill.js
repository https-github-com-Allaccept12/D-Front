import React, { useState } from "react";
import { Button, Title, SkillThumbnail } from "../../../elements";
import skillList from "../../ArtWorks/skillList"
import { MultiSelect } from "react-multi-select-component";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Box = tw.div`
col-start-2 col-span-full justify-center items-center
`
const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10
`

// 메인스킬과 보조스킬 분리
const MySkill = (props) => {
  let history = useHistory();
  const options = skillList;
  const [toolSelectedMain, setToolSelectedMain] = useState([]);
  const [toolSelectedSub, setToolSelectedSub] = useState([]);

  let mainSpecialty = "";
  for(var value of toolSelectedMain){
    mainSpecialty += value.value;
  }

  let subSpecialty = "";
  for(var value of toolSelectedSub){
    subSpecialty += value.value;
  }

  // console.log(specialty);

  const SendSkill = () => {
    const formData = new FormData();
    let data = {
      specialty: mainSpecialty,
      other_specialty: subSpecialty
    }
    formData.append("data")
  }

  return (
    <>

        <div className="grid grid-cols-3 w-full gap-3">
        <Title size="4">MY SKILLS</Title>

        <Title size="6" className="col-start-1">대표스킬</Title>    
        <Box> <MultiSelect options={options} value={toolSelectedMain} labelledBy="Select1" onChange={setToolSelectedMain}/>
        </Box>
       

<Title size="6" className="col-start-1">보유스킬</Title>
<Box><MultiSelect options={options} value={toolSelectedSub} labelledBy="Select2" onChange={setToolSelectedSub}/>
</Box>

<InnerLine />

<Title size="4">작업기간</Title>

<div className="bg-yellow-300 w-full h-[23rem] col-start-1 col-span-full"> 타임테이블</div>

</div>

    </>

  );
};

export default MySkill;