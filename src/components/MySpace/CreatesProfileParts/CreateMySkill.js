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
  const [toolSelected, setToolSelected] = useState([]);
  return (
    <>

        <div className="grid grid-cols-3 w-full gap-3">
        <Title size="4">MY SKILLS</Title>

        <Title size="6" className="col-start-1">대표스킬</Title>    
        <Box> <MultiSelect options={options} value={toolSelected} labelledBy="Select" onChange={setToolSelected}/>
        </Box>
       

<Title size="6" className="col-start-1">보유스킬</Title>
<Box><MultiSelect options={options} value={toolSelected} labelledBy="Select" onChange={setToolSelected}/>
</Box>

<InnerLine />

<Title size="4">작업기간</Title>

<div className="bg-yellow-300 w-full h-[23rem] col-start-1 col-span-full"> jdlsf</div>

</div>

    </>

  );
};

export default MySkill;