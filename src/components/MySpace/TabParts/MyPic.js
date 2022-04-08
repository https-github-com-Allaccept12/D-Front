import React, { useEffect } from "react";
import { Button, Title, EditMyArtWork } from "../../../elements";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkList } from "../../../redux/modules/myPage";
import tw from "tailwind-styled-components"

const Line = tw.hr`
border border-gray-600 my-5 w-full
`

const MyPic = (props) => {
  const visitor_account_id = sessionStorage.getItem("account_id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookmarkList({visitor_account_id, dispatch}));
  }, [])
  
  const marked = useSelector((state) => state.myPage.bookmarked);
  console.log(marked);

  return (
    <>
    <>
    <div className="flex flex-col items-start justify-start w-5/6 mx-auto mt-3">

         <Title size="4">스크랩한 작업</Title> 
    
        <Line /> 

        </div>
    </>
    <div className="flex flex-row flex-wrap items-center justify-center gap-6">
     {marked && marked.map((value) => {
       return (
        <EditMyArtWork src={value.img} artwork_id={value.artwork_id} size="1" />
       )
     })}
{/* <EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" />
<EditMyArtWork src="https://ohfun.net/contents/article/images/2016/0526/1464221994635450.jpg" size="1" /> */}
   </div>
    </>
  );
};

export default MyPic;