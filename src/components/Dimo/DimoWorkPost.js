import React from "react";
import { Button, Image, Profile, Title } from "../../elements";

import { useHistory, Link, useLocation } from "react-router-dom";


const DimoWorkPost = (props) => {
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[1]
  const { size } = props;
  let history = useHistory();
  return (
    <>
    <div className="w-[32.5rem] h-[18.75rem] bg-dpurple-100">

 <div className="absolute w-[32.5rem] h-[18.75rem]">
    <div>
    <div className="absolute top-12 pl-6 hover:scale-110 cursor-pointer">
            <Profile size="6" src="http://kids.donga.com/www/data/news/201408/2014080726.jpg" main />
            </div>
      <div className="absolute top-12 left-24">
        <div>취준생, 고민</div>
        <Title size="6">이런이런 고민이 있어여</Title></div>
    </div>
        <div cla>
          dkflsdjflskfdjlk
        </div>
 </div>




<time>2022.20</time><p>조회수 2222</p><p>컨텐츠</p>

{ b === "dimoqna" ? 
<Link to="dimoqnadetail">
  <p className="text-xl font-medium text-blue-500 dark:text-blue-300">
    답변하기</p></Link> :  <Link to="dimodetail">
    <p className="text-xl font-medium text-blue-500 dark:text-blue-300">
      나도 댓글달기</p></Link> }
    
    <div className="">
    <span className="text-blue-800">좋아요 1 </span>
    <span className="text-blue-800">저장하기 1</span>
    <span className="text-blue-800">공유하기</span>
    </div>

</div>
</>
  );
};

DimoWorkPost.defaultProps = {
  size : "2"
}

export default DimoWorkPost;
