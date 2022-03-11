import React from "react";
import { Grid, Title, Image, Text, Input } from "../../elements";
import DropDown from "../DropDown"

import { useHistory, Link } from "react-router-dom";


const DimoSlide = (props) => {
  let history = useHistory();
  return (
    <>
    
    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 font-sanss2">

        <div className="flex justify-center -mt-16 md:justify-start">
            <Image size="large" alt="" />
        </div>
        <div className="flex flex-row gap-1">
        <p className="bg-red-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UI 디자인</p>
        <p className="bg-yellow-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UX 디자인</p>
        <p className="bg-slate-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">디자인툴</p>
        </div>
        
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">이런이런 고민이 있어여</h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200 min-h-max h-32 max-h-32 text-ellipsis">고민고민 고민고민고민 고민고민고민 고민고민고민고민고민고민 고민고민고민 고민고민고민고민고민고민 고민고민고민 고민고민고민고민고민고민고민고민고민</p>
        
        <div className="flex justify-between mt-4">
            <p href="#" className="text-xl font-medium text-blue-500 dark:text-blue-300">답변하러 가기</p> 
            <div className="">
            <span className="text-blue-500">❤ 1 </span>
            <span className="text-blue-500"> ❤ 96</span>
            </div>
        </div>

    </div>
    
    </>
  );
};

export default DimoSlide;