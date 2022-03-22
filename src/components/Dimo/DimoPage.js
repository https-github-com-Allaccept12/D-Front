import React from "react";
import { Button, Title, Text, SearchInput } from "../../elements";

import { Link, Route, Switch, useLocation } from 'react-router-dom';


import { DimoSlider } from "../../components"


const DimoCategory = (props) => {
  const {list} = props
  if(list === "qna") return (
    <> 


<div className="sticky top-20">


        <div className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[32.5rem]
        rounded-lg bg-white">


   
      
      
            <div class="">
            <Text size="2" className="leading-loose"><Link to="/dimo/qna/all">□ 전체보기</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/uiux">□ UI / UX</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/eco">□ 건축 / 인테리어 / 환경디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/game">□ 게임 / 캐릭터 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/craft">□ 공예</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/graphic">□ 그래픽디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/edit">□ 브랜딩 / 편집디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/video">□ 영상 / 모션그래픽</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/product">□ 제품 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/typo">□ 타이포그래피</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/fashion">□ 패션</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/package">□ 패키지 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/dimo/qna/else">□ 기타</Link></Text>
  
          </div>

      </div>
         

    </div>
  

    </>
  );

  if(list === "shared") return (
    <> 


    <div className="sticky top-20">
    
    
            <div className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[32.5rem]
            rounded-lg bg-white">
    
    
       
    <Title size="5" className="py-3">카테고리</Title>

<Text size="2" className="leading-loose"><Link to="/dimo/shared/all">□ 전체보기</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/uiux">□ UI / UX</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/eco">□ 건축 / 인테리어 / 환경디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/game">□ 게임 / 캐릭터 디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/craft">□ 공예</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/graphic">□ 그래픽디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/edit">□ 브랜딩 / 편집디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/video">□ 영상 / 모션그래픽</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/product">□ 제품 디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/typo">□ 타이포그래피</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/fashion">□ 패션</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/package">□ 패키지 디자인</Link></Text>
<Text size="2" className="leading-loose"><Link to="/dimo/shared/else">□ 기타</Link></Text>
      
              </div>
    
        
             
    
        </div>
      
    
    </>
  );
  else {
    return null
  }
};

export default DimoCategory;
