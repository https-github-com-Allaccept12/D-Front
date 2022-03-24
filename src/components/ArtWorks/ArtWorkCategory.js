import React from "react";

import { Title, Button, Text } from "../../elements"
import { ArtWorkWrite } from "../../components/ArtWorks";
import { Link, Route, Switch } from 'react-router-dom';
import { useTabs } from "../../hooks";


const ArtWorkCategory = (props) => {


  return (
    <>
      
     
<div className="sticky top-20">

<div className="flex flex-col justify-center pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[32.5rem]
rounded-lg bg-white">


<Button><Link to="/createart">작품등록</Link></Button>
          <Title size="5" className="py-3">카테고리</Title>

          <Text size="2" className="leading-loose"><Link to="/art/list/all">□ 전체보기</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/uiux">□ UI / UX</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/eco">□ 건축 / 인테리어 / 환경디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/game">□ 게임 / 캐릭터 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/craft">□ 공예</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/graphic">□ 그래픽디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/edit">□ 브랜딩 / 편집디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/video">□ 영상 / 모션그래픽</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/product">□ 제품 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/typo">□ 타이포그래피</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/fashion">□ 패션</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/package">□ 패키지 디자인</Link></Text>
          <Text size="2" className="leading-loose"><Link to="/art/list/else">□ 기타</Link></Text>
    </div>
    </div>

    </>
  );
};

export default ArtWorkCategory;