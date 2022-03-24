import React from "react";
import { Button, EditMyArtWork, Title } from "../../../elements";

import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-6 w-5/6 mx-auto
`

const MyPortfolio = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="flex w-5/6 mx-auto flex-row flex-wrap justify-start items-center">
    <Title size="3" className="mt-32">PORTFOLIO</Title>
   
    </div>
    <Line /> 
   <div className="flex flex-row flex-wrap justify-center items-center gap-6">
     
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
   </div>
    </>
  );
};

export default MyPortfolio;