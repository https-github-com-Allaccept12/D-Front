import React from "react";
import { Button, Grid, Image } from "../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../hooks";
import { AdjBar, PostList, SideBar } from "../components";



const MySpace = (props) => {


  let history = useHistory();


  return (
    <div>
      <div className="bg-gray-200 fixed h-screen w-40 left-32 top-0">둘러보기</div>
    <div className="flex flex-row w-full bg-blue-500 p-20">
      
      <div className="flex flex-col justify-center items-center mt-28 bg-slate-400">
        <div className="absolute top-28 z-10">
      <Image size="5xl" />

      </div>

      <div className="mt-72">
      <PostList />
      </div>
      </div>
     

    </div>

    </div>
  );
};

export default MySpace;