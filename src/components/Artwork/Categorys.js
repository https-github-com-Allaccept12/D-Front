import React from "react";

import { AllList, InlineDetail } from "../../components";
import { Title, Button } from "../../elements"
import { Link, Route, Switch } from 'react-router-dom';
import { useTabs } from "../../hooks";
import { CreateArtWork } from "../../creates";



const Categorys = (props) => {

  const array_sample = [
    {
      tab: "UI / UX",
      content: <AllList />,
    },
    {
      tab: "건축 / 인테리어 / 환경디자인",
      content: "없음!",
    },
    {
      tab: "게임 / 캐릭터 디자인",
      content: <AllList />,
    },
    {
      tab: "공예",
      content: <AllList />,
    },
    {
      tab: "그래픽디자인",
      content: <AllList />,
    },
    {
      tab: "브랜딩 / 편집디자인",
      content: <AllList />,
    },
    {
      tab: "영상 / 모션그래픽",
      content: <AllList />,
    },
    {
      tab: "제품 디자인",
      content: <AllList />,
    },
    {
      tab: "타이포그래피",
      content: <AllList />,
    },
    {
      tab: "패션",
      content: <AllList />,
    },
    {
      tab: "패키지 디자인",
      content: <AllList />,
    },  
    ]
  

  const {currentItem, changeItem} = useTabs(0, array_sample);

  return (
    <>

   
    <div className="grid grid-cols-5 grid-auto bg-dgray-100 w-full">

      <div className="w-full hidden md:contents">
        <div className="sticky top-10">
        <div className="flex flex-col justify-center mt-10 text-left ml-6 p-2 border-2 border-dpurple-100
        rounded-lg bg-white">
                      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
</div>
          <Link to="/createart"><Button size="2">글쓰기</Button></Link>
          <Link to="/detail"><Button size="2">인라인</Button></Link>
          <Title size="5">카테고리</Title>
      {array_sample.map((arrays, index) => 
      (
        <div className="gird font-min1">
        <div className="rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				✨{arrays.tab}</div>
        </div>

        ))}
      </div>
      </div>
      </div>

      <div className="col-start-1 md:col-start-2 col-end-6 border-2 md:mx-5 mt-10 rounded-lg bg-white 2xl:w-5/6">

        <div>{currentItem.content}</div>
        </div>
    </div>


    </>
  );
};

export default Categorys;