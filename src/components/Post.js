import React from "react";
import { Button, Image } from "../elements";

import { useHistory } from "react-router-dom";


const Post = (props) => {
  let history = useHistory();
  return (
    <div className="m-1 my-10 w-64 h-72 p-1 container">
      <div className="relative">
      <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="art_work" />
      <div className="absolute top-0 bg-black w-64 h-64 -ml-1 opacity-0 hover:opacity-70">
        <div className="absolute bottom-10 left-32 text-white">작품 설명을 여기에 감출수 있어여</div>
        </div>
      </div>
      <div className="justify-start items-center flex flex-row pt-1">
        <Image size="x-small" /> <span className="font-sanss2 p-1 text-white">작가이름</span>
        <span className="flex-row-reverse font-sanss2 p-1 text-white ml-28">❤ 12</span>
      </div>
        

      
    </div>
  );
};

export default Post;