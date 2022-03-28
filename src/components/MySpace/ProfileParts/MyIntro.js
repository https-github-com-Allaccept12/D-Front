import React from "react";
import { Title, Text } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-200 my-20
`;

const MyIntro = (props) => {
  const {info} = props
  // const titleContent = info.title_content
  // const subContent = info.sub_content
  const titleContent = ""
  const subContent = ""
  return (
    <>
      <Line />
      <div className="flex flex-col w-5/6 mx-auto">
        <Title size="3" className="mb-5">
          {titleContent}
        </Title>
        <Text size="1">
          {subContent}
        </Text>
      </div>
      <Line />
    </>
  );
};

export default MyIntro;
