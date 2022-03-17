import React from "react";
import { Button, Image, Card, Title } from "../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";


const DimoWork = (props) => {
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[1]
  const { size } = props;
  let history = useHistory();
  return (
    <>
    <Card types="text" size={size}>

<div className="flex flex-row gap-1">
<p className="bg-red-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UI 디자인</p>
<p className="bg-yellow-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UX 디자인</p>
<p className="bg-slate-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">디자인툴</p>
</div>

<Title size="4">이런이런 고민이 있어여</Title>
<time>2022.20</time><p>조회수 2222</p><p>컨텐츠</p>

{ b === "dimoqna" ? 
<Link to="dimoqnadetail">
  <p className="text-xl font-medium text-blue-500 dark:text-blue-300">
    답변하기</p></Link> :  <Link to="dimodetail">
    <p className="text-xl font-medium text-blue-500 dark:text-blue-300">
      나도 댓글달기</p></Link> }
    
    <div className="">
    <span className="text-blue-500">좋아요 1 </span>
    <span className="text-blue-500">저장하기 1</span>
    <span className="text-blue-500">공유하기</span>
    </div>

</Card>

</>
  );
};

DimoWork.defaultProps = {
  size : "2"
}

export default DimoWork;
