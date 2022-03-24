import React from "react";
import { Button, Image } from "../../../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../../../hooks";

import { MyAnswer, MyBookmark, MyComment, MyPost } from "../../MySpace"


const MyPosts = (props) => {
  let history = useHistory();
  
    const array_sample = [
    {
      tab: "내글",
      content: <MyPost />,
    },
    {
      tab: "내댓글",
      content: <MyComment />,
    },
    {
      tab: "스크랩글",
      content: <MyBookmark />,
    }
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

export default MyPosts;