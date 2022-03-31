import React, { useEffect, useState } from "react";
import { Title, Text } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-200 my-20
`;

const MyIntro = (props) => {
  const {info} = props
  const [titleContent, setTitleContent] = useState(null);
  const [subContent, setSubContent] = useState(null);
  // let titleContent = ""
  // let subContent = ""
  useEffect(() => {
    if(info){
      setTitleContent(info.title_content)
      setSubContent(info.sub_content)
    }
  }, [info])
  // const titleContent = ""
  // const subContent = ""
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
