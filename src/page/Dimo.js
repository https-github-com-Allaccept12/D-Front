import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";
import { PostList , DimoSlider, AdjBar, DimoList } from "../components";
import { useTabs } from "../hooks";


const array_sample = [{
  tab: "전체보기",
  content: <DimoList />,
},
{
  tab: "UI / UX",
  content: <DimoList />,
},
{
  tab: "건축 / 인테리어 / 환경디자인",
  content: "없음!",
},
{
  tab: "게임 / 캐릭터 디자인",
  content: <DimoList />,
},
{
  tab: "그래픽디자인",
  content: <DimoList />,
},
{
  tab: "브랜딩 / 편집디자인",
  content: <DimoList />,
},
{
  tab: "영상 / 모션그래픽",
  content: <DimoList />,
},
{
  tab: "제품 / 패키지 디자인",
  content: <DimoList />,
},
{
  tab: "패션",
  content: <DimoList />,
},
{
  tab: "기타",
  content: <DimoList />,
},


]

const Dimo = (props) => {
  let history = useHistory();
  const {currentItem, changeItem} = useTabs(0, array_sample);
  return (
    <>
    <div className="flex p-3">
      <DimoSlider />
      
    </div>

    <div className="flex flex-row w-full">
      <div className="h-96 w-1/5 hidden md:flex md:flex-col p-4 bg-blue-400 rounded-md font-sanss2 mt-10 flex-shrink-0">
      {array_sample.map((arrays, index) => 
      (
        <div className="flex-1 flex justify-start items-center">
        <div className=" bg-slate-300 rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				{arrays.tab}</div>
        </div>

        ))}
      </div>
      <div className="flex flex-col">
        <AdjBar />
        <div>{currentItem.content}</div>
        </div>
    </div>
    </>
  );
};

export default Dimo;