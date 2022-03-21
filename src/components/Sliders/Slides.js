import React from "react";
import { Label, Title, HeartButton, Text, Card, Profile, Button, Thumbnail } from "../../elements";


import { useHistory, Link } from "react-router-dom";
import { DimoWorkPost } from "../Dimo";


const Slides = (props) => {
  const { main, artwork, dimo } = props;
  let history = useHistory();
  if(main) return (
    <>
     <div className="flex flex-col items-center justify-center ">
        <div className="bg-white shadow-md bg-center bg-cover rounded-lg">
          
          <Card size="5" types="text" src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg" />

        <div className=" absolute top-0 
        w-[19.75rem] h-[17.5rem] rounded-lg">
<div className="flex flex-row shrink-0 gap-x-3 mt-5 justify-center items-center">
          <div className=" w-[8.375rem]
           h-[15rem] rounded-lg">
             <Thumbnail src="https://trboard.game.onstove.com/Data/TR/20170827/15/636394451146245838.gif" className="overflow-hidden object-cover object-center" />
           </div>
                 <div className="bg-yellow-200 w-[8.375rem]
           h-[15rem] rounded-lg">
                          <Thumbnail src="https://i.pinimg.com/originals/4d/21/9c/4d219c623a1bf7e59f7bd189ba4663cd.png" className="overflow-hidden object-cover object-center" />
           </div>
           </div>
        </div>
          </div>

        <div className="-mt-40 overflow-hidden bg-white
        rounded-b-xl w-[18.75rem] h-[8.75rem]">
          
            <div className="absolute bottom-[86px] pl-6 hover:scale-110 cursor-pointer">
            <Profile size="4" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" main />
            </div>
            <div className="pl-36 pt-6">
            <Title size="5">펭귄 님</Title>
            <div className="-mt-1">
            <Text size="5">그래픽 디자인 UI/UX </Text>
            </div>
            </div>
            <div className="flex justify-center mt-4">
            <Button size="3" color="1">팔로우</Button>
            </div>
        </div>
    </div>
    </>


  );
  if(artwork) return (
      <>
      <div className="rounded-lg">
          <Card size="4" src="https://thumb.ac-illust.com/a5/a5b68711f17ff70ea9974c0a32a2fcb5_t.jpeg" />
          <div className="absolute bottom-3 ">
            <div className="rounded-b-lg ml-2 bg-dgray-500 opacity-80 w-c04 h-14"> 
            <div className="flex justify-center items-center pt-3 font-min1">
            프로젝트 이름
            </div>

            
            </div>
          </div>
      </div>
      
      </>
  );

  if(dimo) return (
    <>
    <>
    <div className="w-[32.5rem] h-[18.75rem] rounded-lg">

 <div className="absolute w-[32.5rem] h-[18.75rem] bg-dpurple-200 rounded-lg">
    <div>
    <div className="absolute top-7 pl-8 hover:scale-110 cursor-pointer">
            <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" main />
            </div>
      <div className="absolute top-7 left-28">
      <div className="flex flex-row gap-1">
          <Label size="1" color="4">취준생</Label>
          <Label size="1" color="5">진로고민</Label>
        </div>
        <Title size="6">이런이런 고민이 있어여</Title></div>
    </div>
    <div className="absolute top-28 px-10">
    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
    안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이 아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을 얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인 시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다. 
      </Text> <Text size="2">(더보기)</Text>
     
      </div>
    <div className="absolute bottom-7 px-10 w-full">
      <div className="flex flex-row justify-between">
        <HeartButton like_cnt="1" is_like />
        <div className="flex flex-row space-x-4">
        <HeartButton like_cnt="0" is_like />
        <HeartButton like_cnt="1" is_like />
        </div>
      </div>
    </div>
 </div>






</div>
</>
    </>
  );
};

export default Slides;