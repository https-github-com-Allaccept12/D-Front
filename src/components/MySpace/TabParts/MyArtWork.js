import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PortfolioLoad } from "../../../redux/modules/artWork";
import { Button, Title, EditMyArtWork } from "../../../elements";
import tw from "tailwind-styled-components"
import { useHistory } from "react-router-dom";

const Line = tw.hr`
border border-gray-600 my-5 w-full
`

const MyArtWork = (props) => {
  const dispatch = useDispatch();
  const { info } = props
  const owner_account_id = info;
  console.log(owner_account_id);
  useEffect(() => {
    dispatch(PortfolioLoad({owner_account_id, dispatch}))
  }, [info])
  
  return (
    <>
    <>
    <div className="flex flex-col items-start justify-start w-5/6 mx-auto mt-3">

         <Title size="4">내 작업</Title> 
    
        <Line /> 

        </div>
    </>
    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
     
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

export default MyArtWork;