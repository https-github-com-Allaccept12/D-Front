import React from "react";
import { SelectBox, Title } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-5
`

const MyTimeLine = (props) => {
  let history = useHistory();
  return (
    <>
        <div className="flex flex-col w-5/6 mx-auto">
<div className="flex flex-row justify-between mt-24">
    
        <Title size="3">WORK TIMELINE</Title> <SelectBox option01="2020" option02="2021" option03="2022" /></div>
        <Line /> 
<div className="w-full h-96 bg-yellow-300 mb-14">

</div>
        </div>
    </>

  );
};

export default MyTimeLine;