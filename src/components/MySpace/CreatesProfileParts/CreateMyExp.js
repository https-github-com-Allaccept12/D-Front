import React, { useState } from "react";
import { Button, Title, Input, CheckBox } from "../../../elements";
import CreateMyExpBox from "./CreateMyExpBox"
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const TitleBox = tw.div`
flex justify-between items-center flex-row gap-4 col-span-full
`

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mt-10
`

const CreateMyExp = (props) => {
  let history = useHistory();
  const [countList, setCountList] = useState([0])

  const onAddDetailDiv = () => {
    let countArr = [...countList]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter)	// index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
    setCountList(countArr)
  }

  return (
    <><div className="grid grid-cols-4 w-full col-span-full gap-3">
      
      <TitleBox>
  <Title size="4" className="my-6">대표작품</Title> 
<Title size="4" onClick={onAddDetailDiv} className="my-6 text-dpurple-300 cursor-pointer">+추가하기</Title>
</TitleBox>

<CreateMyExpBox countList={countList} />

</div>



    </>

  );
};

export default CreateMyExp;