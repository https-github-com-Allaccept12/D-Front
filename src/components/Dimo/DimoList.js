import React from "react";
import { Button, Title } from "../../elements";
import { DimoSlider, AllList, AdjBar } from "../../components";



import { useHistory, Link } from "react-router-dom";

import { useTabs } from "../../hooks";


const DimoList = (props) => {

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
  
  let history = useHistory();
  const {currentItem, changeItem} = useTabs(0, array_sample);
  return (
    <>

      
<div className="grid grid-cols-5">
      <div className="w-full">
        <div className="sticky top-10">
        <div className="flex flex-col justify-center mt-10 text-left ml-6 p-2 border-2 border-dpurple-100
        rounded-lg">
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
      <div className="col-start-2 col-end-7">
      <DimoSlider />
        
       
       
        </div>

      
      
      <div className="col-start-2 row-start-2 col-end-7">
        
        <div>{currentItem.content}</div>
        </div>
    </div>
    </>
  );
};

export default DimoList;
