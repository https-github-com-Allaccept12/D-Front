import React from "react";
import { Button } from "../../elements";
import DimoSlider from "./DimoSlider";
import AdjBar from "../AdjBar";

import {ArtWorkList} from "..";

import { useHistory } from "react-router-dom";

import { useTabs } from "../../hooks";


const array_sample = [{
  tab: "전체보기",
  content: <ArtWorkList />,
},
{
  tab: "UI / UX",
  content: <ArtWorkList />,
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

      
    <div className="grid grid-cols-6">
      <div className="fixed">
      {array_sample.map((arrays, index) => 
      (
        <div className="gird">
        <div className=" bg-slate-300 rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				{arrays.tab}</div>
        
        </div>

        ))}
      </div>
      <div className="col-start-2 col-end-6">
        <div className="fixed top-12"><AdjBar /></div> </div>

      <DimoSlider />
      
      <div className="col-start-2 col-end-7">
        
        <div>{currentItem.content}</div>
        </div>
    </div>
    </>
  );
};

export default DimoList;