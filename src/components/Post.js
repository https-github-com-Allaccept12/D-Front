import React from "react";
import { Button, Image } from "../elements";

import { useHistory } from "react-router-dom";


const Post = (props) => {
  let history = useHistory();
  return (
    <div className="m-1 my-10 w-full md:w-64 md:h-72 p-1 flex justify-center items-center flex-col">
      <div className="">
        <div className="h-64 w-64 overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="art_work" />
      </div>
      <div className="justify-start items-center flex flex-row pt-1">
        <Image size="x-small" /> <span className="font-sanss2 p-1 text-white">작가이름</span>
        <span className="flex-row-reverse font-sanss2 p-1 text-white ml-28">❤ 12</span>
      </div>
        
    </div>
    </div>
  );
};

export default Post;