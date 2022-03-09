import React from "react";
import { Grid, Title, Image, Text, Input } from "../elements";
import DropDown from "./DropDown"

import { useHistory, Link } from "react-router-dom";


const SlideButtom = (props) => {
  let history = useHistory();
  return (
    <div className="absolute top-48 bg-black w-56 h-24 rounded-b-xl opacity-90">
    <div className="absolute -top-10 left-3">
        <Image shape="circle" size="large" />
    </div>
    <div className="absolute left-24 top-2">
    <p className="text-sm text-center">펭귄 님</p>
        <div>
        <p className="text-xs">그래픽디자인/UX/UI</p>
        </div>
    </div>
        <button className="absolute bottom-2 left-20 ml-3 text-base bg-slate-600 px-1 rounded-lg">팔로우</button>
    </div>
    
  );
};

export default SlideButtom;