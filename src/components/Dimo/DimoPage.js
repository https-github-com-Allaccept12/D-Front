import React, {useEffect, useState} from "react";
import { Button, Title, Text } from "../../elements";

import { Link } from 'react-router-dom';
import tw from "tailwind-styled-components";


const DimoCategory = (props) => {
  const {list} = props;
  const [active, setActive] = useState("0");

  useEffect(() => {
    setActive("0")
  },[list]);

  if(list === "qna") return (
    <> 


<div className="sticky top-20">


        <div className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[32.5rem]
        rounded-lg bg-white">


   
      
<Title size="5" className="py-3">카테고리</Title>


<Link to="/dimo/qna/all">   
<Text size="2"
          onClick={()=> {setActive("0")}}
          className={active === "0" ? 'bg-yellow-400' : ''}
          >
              □ 전체보기</Text></Link>

              <Link to="/dimo/qna/uiux">
              <Text size="2"
          onClick={()=> {setActive("1")}}
          className={active === "1" ? 'bg-yellow-400' : ''}
          >
          □ UI / UX</Text></Link>

          <Link to="/dimo/qna/eco">
          <Text size="2"
          onClick={()=> {setActive("2")}}
          className={active === "2" ? 'bg-yellow-400' : ''}
          >□ 건축 / 인테리어 / 환경디자인</Text></Link>

<Link to="/dimo/qna/game">
<Text size="2"
          onClick={()=> {setActive("3")}}
          className={active === "3" ? 'bg-yellow-400' : ''}
          >
          □ 게임 / 캐릭터 디자인</Text></Link>

          <Link to="/dimo/qna/craft">
          <Text size="2"
          onClick={()=> {setActive("4")}}
          className={active === "4" ? 'bg-yellow-400' : ''}
          >
          □ 공예</Text></Link>

          <Link to="/dimo/qna/graphic">
          <Text size="2"
          onClick={()=> {setActive("5")}}
          className={active === "5" ? 'bg-yellow-400' : ''}
          >
          □ 그래픽디자인</Text></Link>

          <Link to="/dimo/qna/edit">
           <Text size="2"
          onClick={()=> {setActive("6")}}
          className={active === "6" ? 'bg-yellow-400' : ''}
          >
            □ 브랜딩 / 편집디자인</Text></Link>

            <Link to="/dimo/qna/video">
            <Text size="2"
          onClick={()=> {setActive("7")}}
          className={active === "7" ? 'bg-yellow-400' : ''}
          >
            □ 영상 / 모션그래픽</Text></Link>

            <Link to="/dimo/qna/product">
            <Text size="2"
          onClick={()=> {setActive("8")}}
          className={active === "8" ? 'bg-yellow-400' : ''}
          >
           □ 제품 디자인</Text></Link>

           <Link to="/dimo/qna/typo">
            <Text size="2"
          onClick={()=> {setActive("9")}}
          className={active === "9" ? 'bg-yellow-400' : ''}
          >□ 타이포그래피</Text></Link>

<Link to="/dimo/qna/fashion">
<Text size="2"
          onClick={()=> {setActive("10")}}
          className={active === "10" ? 'bg-yellow-400' : ''}
          >□ 패션</Text></Link>
<Link to="/dimo/qna/package">
<Text size="2"
          onClick={()=> {setActive("11")}}
          className={active === "11" ? 'bg-yellow-400' : ''}
          >□ 패키지 디자인</Text></Link>
<Link to="/dimo/qna/else">
<Text size="2"
          onClick={()=> {setActive("12")}}
          className={active === "12" ? 'bg-yellow-400' : ''}
          >
          □ 기타</Text></Link>
  
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
    <Link to="/dimo/shared/all">
    <Text size="2"
          onClick={()=> {setActive("0")}}
          className={active === "0" ? 'bg-yellow-400' : ''}
          >
  □ 전체보기</Text></Link>
  <Link to="/dimo/shared/uiux">
  <Text size="2"
          onClick={()=> {setActive("1")}}
          className={active === "1" ? 'bg-yellow-400' : ''}
          >□ UI / UX</Text></Link>
<Link to="/dimo/shared/eco">
<Text size="2"
          onClick={()=> {setActive("2")}}
          className={active === "2" ? 'bg-yellow-400' : ''}
          >□ 건축 / 인테리어 / 환경디자인</Text></Link>
<Link to="/dimo/shared/game">
<Text size="2"
          onClick={()=> {setActive("3")}}
          className={active === "3" ? 'bg-yellow-400' : ''}
          >□ 게임 / 캐릭터 디자인</Text></Link>

<Link to="/dimo/shared/craft">
<Text size="2"
          onClick={()=> {setActive("4")}}
          className={active === "4" ? 'bg-yellow-400' : ''}
          >
□ 공예</Text></Link>

<Link to="/dimo/shared/graphic">
<Text size="2"
          onClick={()=> {setActive("5")}}
          className={active === "5" ? 'bg-yellow-400' : ''}
          >□ 그래픽디자인</Text></Link>

<Link to="/dimo/shared/edit">
<Text size="2"
          onClick={()=> {setActive("6")}}
          className={active === "6" ? 'bg-yellow-400' : ''}
          >□ 브랜딩 / 편집디자인</Text></Link>

<Link to="/dimo/shared/video">
<Text size="2"
          onClick={()=> {setActive("7")}}
          className={active === "7" ? 'bg-yellow-400' : ''}
          >□ 영상 / 모션그래픽</Text></Link>

<Link to="/dimo/shared/product">
<Text size="2"
          onClick={()=> {setActive("8")}}
          className={active === "8" ? 'bg-yellow-400' : ''}
          >□ 제품 디자인</Text></Link>

<Link to="/dimo/shared/typo">
<Text size="2"
          onClick={()=> {setActive("9")}}
          className={active === "9" ? 'bg-yellow-400' : ''}
          >□ 타이포그래피</Text></Link>

<Link to="/dimo/shared/fashion">
<Text size="2"
          onClick={()=> {setActive("10")}}
          className={active === "10" ? 'bg-yellow-400' : ''}
          >□ 패션</Text></Link>

<Link to="/dimo/shared/package">
<Text size="2"
          onClick={()=> {setActive("11")}}
          className={active === "11" ? 'bg-yellow-400' : ''}
          >□ 패키지 디자인</Text></Link>
<Link to="/dimo/shared/else">
<Text size="2"
          onClick={()=> {setActive("12")}}
          className={active === "12" ? 'bg-yellow-400' : ''}
          >□ 기타</Text></Link>
      
              </div>
    
        </div>
      
    
    </>
  );
  else {
    return null
  }
};

export default DimoCategory;
