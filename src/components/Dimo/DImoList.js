import React from "react";
import { Button } from "../../elements";
import DimoSlider from "./DimoSlider";
import AdjBar from "../AdjBar";
import QNADimo from "./QNADimo";
import {ArtWorkList} from "../../components";

import { useHistory } from "react-router-dom";

import { useTabs } from "../../hooks";


const array_sample = [{
  tab: "전체보기",
  content: <ArtWorkList />,
},
{
  tab: "UI / UX",
  content: <QNADimo />,
},
{
  tab: "건축 / 인테리어 / 환경디자인",
  content: "없음!",
},
{
  tab: "게임 / 캐릭터 디자인",
  content:  <ArtWorkList />,
},
{
  tab: "그래픽디자인",
  content:  <ArtWorkList />,
},
{
  tab: "브랜딩 / 편집디자인",
  content:  <ArtWorkList />,
},
{
  tab: "영상 / 모션그래픽",
  content:  <ArtWorkList />,
},
{
  tab: "제품 / 패키지 디자인",
  content:  <ArtWorkList />,
},
{
  tab: "패션",
  content:  <ArtWorkList />,
},
{
  tab: "기타",
  content:  <ArtWorkList />,
},


]

const DimoList = (props) => {
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

export default DimoList;