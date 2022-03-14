import React from "react";
import { Button } from "../../elements";

import { useHistory, Link } from "react-router-dom";


const NotFound = (props) => {
  let history = useHistory();
  return (
<div className="grid grid-cols-7 grid-rows-4 bg-yellow-400 w-full max-h-screen">
  <div className="row-start-2 col-start-4">질문 : 성향테스트</div>
<div className="row-start-3 col-start-4">
  <div>답 : 11</div>
  <div>답 : 11</div>
</div>
<button className="col-start-5"><Link to="/results">다음으로 넘어가기</Link></button>
</div>
  );
};

export default NotFound;