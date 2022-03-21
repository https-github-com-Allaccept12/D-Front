import React from "react";
import { Button, Image, Title, Text, Input, Profile, HeartButton } from "../../elements";

import { useHistory } from "react-router-dom";
import {Comment} from "../Comment";
import DimoWorkPost from "./DimoWorkPost";



const DimoDetail = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="grid grid-cols-4 bg-dgray-200">

      <div className="col-start-4 col-span-2 grid grid-rows-6 ">
        
        <div className="row-start-1">
          <Title size="4" className="mt-10 mb-3">유사한 질문</Title>
          <div className="bg-white w-11/12 h-64 space-y-12">
            <DimoWorkPost />
            <DimoWorkPost />
            <DimoWorkPost />
            <DimoWorkPost />
          </div>
          </div>
     
      </div>
      <div className="col-start-1 col-end-4 row-start-1">
        <div className="w-11/12 mx-auto mt-8">

        <div className="p-6 flex justify-center items-center">

    <div className="w-[66.875rem] h-[38.375rem] rounded-lg">

 <div className="absolute w-[66.875rem] h-[38.375rem] bg-white rounded-lg">
    <div>
    <div className="absolute top-7 pl-8 hover:scale-110 cursor-pointer">
            <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" main />
            </div>
      <div className="absolute top-7 left-28">
        <div>취준생, 고민</div>
        <Title size="6">이런이런 고민이 있어여</Title></div>
    </div>
    <div className="absolute top-28 px-10">
    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
    안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다. 
      </Text> <Text size="2">(더보기)</Text>
     
      </div>
    <div className="absolute bottom-36 px-10 w-full">
      <div className="flex flex-row justify-between">
        <HeartButton like_cnt="1" is_like />
        <div className="flex flex-row space-x-4">
        <HeartButton like_cnt="0" is_like />
        <HeartButton like_cnt="1" is_like />
        </div>
      </div>
      <hr className="border-2 m-3" />
    </div>
 
    <div className="absolute bottom-8 pl-16">
     <Profile size="4" />
     </div>
     <div className="absolute bottom-14 left-48">
    <Title size="5">이름</Title>
    <Text size="4">채택률 100% / 마감률 100%</Text>
     </div>

     <div className="absolute bottom-14 right-24">
    <Button size="2">팔로우</Button>
     </div>

 </div>

 



</div>


</div>
</div>
   
<hr className="border-2 m-3 border-dgray-400 w-[66.875rem] mx-auto" />
<div className=" w-[66.875rem] mx-auto">
<Title size="3" >답변 2개</Title>
<div className="flex w-[66.875rem] h-[38.375rem] ">
<div className="absolute w-[66.875rem] h-[38.375rem] bg-white border-dpurple-300 border-4">

<div className="absolute top-10 pl-16 ">
     <Profile size="4" />
     </div>
     <div className="absolute top-12 left-48">
    <Title size="5">이름</Title>
    <Text size="4">채택받은 답변수</Text>
    <Text size="4">관심분야</Text>
     </div>

     <div className="absolute top-12 right-24">
    <Button size="2">팔로우</Button>
     </div>
    <div className="absolute top-36 w-full">

    <hr className="border-2 m-3 top-40 " />
    </div>



    <div className="absolute top-48 pl-20">
        <div>2022 조회수 2천</div>
        </div>
        <div className="absolute top-56 px-10">
    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
    안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.  제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다. 
      </Text> 
    
</div>

<div className="absolute bottom-36 px-10 w-full">
      <div className="flex flex-row justify-between">
        <HeartButton like_cnt="1" is_like />
        <div className="flex flex-row space-x-4">
        <HeartButton like_cnt="0" is_like />
        <HeartButton like_cnt="1" is_like />
        </div>
      </div>
      <hr className="border-2 m-3 w-full " />
      <Input />
      <Comment />
      </div>
     
    </div>


</div>

<div className="mt-20">
<div className="flex w-[66.875rem] h-[38.375rem]">
<div className="absolute w-[66.875rem] h-[38.375rem] bg-white">

<div className="absolute top-10 pl-16 ">
     <Profile size="4" />
     </div>
     <div className="absolute top-12 left-48">
    <Title size="5">이름</Title>
    <Text size="4">채택받은 답변수</Text>
    <Text size="4">관심분야</Text>
     </div>

     <div className="absolute top-12 right-24">
    <Button size="2">팔로우</Button>
     </div>
    <div className="absolute top-36 w-full">

    <hr className="border-2 m-3 top-40 " />
    </div>



    <div className="absolute top-48 pl-20">
        <div>2022 조회수 2천</div>
        </div>
        <div className="absolute top-56 px-10">
    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
    안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.  제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다. 
      </Text> 
    
</div>

<div className="absolute bottom-36 px-10 w-full">
      <div className="flex flex-row justify-between">
        <HeartButton like_cnt="1" is_like />
        <div className="flex flex-row space-x-4">
        <HeartButton like_cnt="0" is_like />
        <HeartButton like_cnt="1" is_like />
        </div>
      </div>
      <hr className="border-2 m-3 w-full " />
      <Input />
      <Comment />
      </div>
     
    </div>


</div>
</div>

<div className="mt-20">
<div className="flex w-[66.875rem] h-[38.375rem]">
<div className="absolute w-[66.875rem] h-[38.375rem] bg-white">

<div className="absolute top-10 pl-16 ">
     <Profile size="4" />
     </div>
     <div className="absolute top-12 left-48">
    <Title size="5">이름</Title>
    <Text size="4">채택받은 답변수</Text>
    <Text size="4">관심분야</Text>
     </div>

     <div className="absolute top-12 right-24">
    <Button size="2">팔로우</Button>
     </div>
    <div className="absolute top-36 w-full">

    <hr className="border-2 m-3 top-40 " />
    </div>



    <div className="absolute top-48 pl-20">
        <div>2022 조회수 2천</div>
        </div>
        <div className="absolute top-56 px-10">
    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
    안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.  제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다. 
      </Text> 
    
</div>

<div className="absolute bottom-36 px-10 w-full">
      <div className="flex flex-row justify-between">
        <HeartButton like_cnt="1" is_like />
        <div className="flex flex-row space-x-4">
        <HeartButton like_cnt="0" is_like />
        <HeartButton like_cnt="1" is_like />
        </div>
      </div>
      <hr className="border-2 m-3 w-full " />
      <Input />
      <Comment />
      </div>
     
    </div>


</div>
</div>

        </div>

        </div>
      


    </div>


      


</>
  );
};

export default DimoDetail;