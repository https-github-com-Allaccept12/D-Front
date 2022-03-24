import React from "react";
import { Button, Title, EditMyArtWork } from "../../../elements";
import tw from "tailwind-styled-components"
import { useHistory } from "react-router-dom";

const Line = tw.hr`
border border-gray-600 my-5 w-full
`

const MyPic = (props) => {
  let history = useHistory();
  return (
    <>
    <>
    <div className="flex w-5/6 mx-auto flex-col justify-start items-start mt-3">

         <Title size="4">스크랩한 작업</Title> 
    
        <Line /> 

        </div>
    </>
    <div className="flex flex-row flex-wrap justify-center items-center gap-6">
     
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
   </div>
    </>
  );
};

export default MyPic;