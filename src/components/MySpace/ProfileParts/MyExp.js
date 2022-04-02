import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Title, Text } from "../../../elements";

import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-5
`;

const InnerLine = tw.hr`
border border-dgray-300 w-full col-span-full mb-5
`;

const La = tw.li`
text-dgray-400 font-min2 ml-4 mt-4
`;

const MyExp = (props) => {
  const exp = useSelector((state) => state.myPage.history);
  
  return (
    <>
      <div className="flex flex-col w-5/6 mx-auto mt-10">
        <div className="flex flex-row my-10 gap-14">
          <Title size="3">EXPERIENCE</Title>{" "}
          {/* <Title size="6" className="text-gray-300 font-extralight">
            총 1년
          </Title> */}
        </div>
        <Line />
          {exp && exp.map((value) => {
            return(
          <>
          <ol className="grid grid-cols-3 mb-10">
          <li className="row-start-1 mb-10 ml-4">
            <Title size="5">{value.company_name}</Title>
            <Text size="3" className="mt-1 leading-none text-gray-400">
              {value.work_start} ~ {value.work_end}
            </Text>
          </li>
          <ul className="col-start-2 row-start-1 mb-10 ml-4 list-disc col-span-full">
            <Title size="6">{value.company_department} / {value.company_position}</Title>
            {value.achievements.split('\n').map((item) => <La>{item}</La>)}
          </ul>
        </ol>

        <InnerLine />
        </>
          
          )})}
        


        <Line />
      </div>
    </>
  );
};

export default MyExp;
