import React from "react";
import { Grid, Title, Image, Text, Input } from "../elements";
import DropDown from "./DropDown"

import { useHistory, Link } from "react-router-dom";


const SlideBottom = (props) => {
  let history = useHistory();
  return (
    <div className="w-full">
    <div className="max-w-xs mx-auto overflow-hidden rounded-lg">
        <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="big_square" />
        
        <div class="py-5 text-center">
        <div className="absolute bottom-4 ml-1 md:ml-2 p-2 z-10">
        <Image shape="circle" size="large" />
    </div>
    <div className="absolute bottom-8 ml-14 md:ml-16 px-14 pr-16 rounded-lg bg-gray-200 opacity-90">
    <p className="text-sm text-center text-gray-700">펭귄 님</p>
        <div>
        <p className="text-xs text-gray-700">그래픽디자인/UX/UI</p>
        </div>
        <button className="text-base bg-slate-600 px-1 rounded-lg">팔로우</button>
    </div>
        
        </div>
    </div>
    
    </div>
  );
};

export default SlideBottom;