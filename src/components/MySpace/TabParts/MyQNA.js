import React from "react";
import { Button, Image } from "../../../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../../../hooks";

import { MyAnswer, MyQuestion } from "../../MySpace"


const MyQNA = (props) => {
  let history = useHistory();
  
    const array_sample = [
    {
      tab: "내답변",
      content: <MyAnswer />,
    },
    {
      tab: "내질문",
      content: <MyQuestion />,
    },

    ]
    const {currentItem, changeItem} = useTabs(0, array_sample);
  return (
    <>
    <div className="flex flex-row bg-blue-400">
        탭탭
          {array_sample.map((arrays, index) => 
      (
        <div className="">

        <div className=" bg-slate-300 rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				{arrays.tab}</div>
        </div>

        ))}

          </div>
          <div>{currentItem.content}
             </div>

    </>
  );
};

export default MyQNA;