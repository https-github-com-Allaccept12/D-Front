import React from "react";
import { Button, Grid } from "../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../hooks";
import { PostList } from "../components";



const array_sample = [{
  tab: "1번탭",
  content: "여기가 소개 페이지",
},
{
  tab: "2번탭",
  content: <PostList />,
}]



const MySpace = (props) => {


  let history = useHistory();
  const {currentItem, changeItem} = useTabs(0, array_sample);

  return (
    <div>
      <div className="flex flex-row p-3 justify-center items-center">
      {array_sample.map((t, index) => 
      (
        <Button onClick={()=>changeItem(index)}>{t.tab}</Button>
        ))}
</div>  
<hr className="border-4" />
<Grid>
      <div className="flex flex-col">{currentItem.content}</div>
      </Grid>
    </div>
  );
};

export default MySpace;