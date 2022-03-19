import React from "react";
import { Grid, Title, Image, Text, Card, Profile, Button, Thumbnail } from "../../elements";


import { useHistory, Link } from "react-router-dom";
import {ArtWork, DimoWork } from "../../components";


const Slides = (props) => {
  const { main, artwork, dimo } = props;
  let history = useHistory();
  if(main) return (
    <>
     <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
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
    <DimoWork size="3" />
    </>
  );
};

export default Slides;