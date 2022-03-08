import React from "react";
import { Button, Grid } from "../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../hooks";



const array_sample = [{
  tab: "1번탭",
  content: "여기가 오버뷰",
},
{
  tab: "2번탭",
  content: "여기가 작품 페이지",
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