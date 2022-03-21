import React from "react";
import { Button, Title, Text } from "../../elements";

import { Link, Route, Switch, useLocation } from 'react-router-dom';

import { DimoQNADetail, DimoSharedDetail, DimoCreate } from "../Dimo"

import { DimoSlider } from "../../components"


const DimoCategory = (props) => {
  const {list} = props
  if(list === "qna") return (
    <> 
    <div className="fixed right-10 top-32">
      <div className="flex flex-row p-4 gap-3">
     <Link to="/dimo/qna/create"><Button size="3">글쓰기</Button></Link>
          <Link to="/dimo/qna/detail"><Button size="3">인라인</Button></Link>
          </div>
          </div>

          <div className="ml-16">
        <DimoSlider />
      </div>

<div className="absolute top-[32rem] left-[5.6rem]">
        <div className="flex flex-col justify-start pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[40.5rem]
        rounded-lg bg-white">

         
          <Title size="5" className="py-3">카테고리</Title>

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
    <Switch>
        <Route exact path="/dimo/qna/detail" component={DimoQNADetail} />
        <Route exact path="/dimo/qna/create" component={DimoCreate} />
        </Switch>
    </>
  );

  if(list === "shared") return (
    <> 
<div className="fixed top-36 left-20">
        <div className="flex flex-col justify-start pl-[2.5rem] mt-10 text-left ml-6 p-2 w-[17.75rem] h-[52.5rem]
        rounded-lg bg-white">

          <Link to="/dimo/shared/create"><Button size="3">글쓰기</Button></Link>
          <Link to="/dimo/shared/detail"><Button size="3">인라인</Button></Link>

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
    <Switch>
        <Route exact path="/dimo/shared/detail" component={DimoSharedDetail} />
        <Route exact path="/dimo/shared/create" component={DimoCreate} />
        </Switch>
    </>
  );
};

export default DimoCategory;
