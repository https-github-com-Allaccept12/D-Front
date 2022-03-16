import React, {useState} from "react";
import { Button } from "../../elements";

import { useHistory, Link } from "react-router-dom";

const NotFound = (props) => {
  const [TestNum, nextTestNum] = useState(0);
  console.log(TestNum);

  return (
    <div className="grid w-full max-h-screen grid-cols-7 grid-rows-6 bg-yellow-400">
      <div className="col-start-4 row-start-2">디자이너 성향테스트</div>
      <div className="col-start-4 row-start-3">
        <div>나의 디자인 성향은?</div>
        <div>1분이면 성향 확인 가능!</div>
      </div>
      <div className="col-start-4 row-start-5">
          <Button size="2" color="3" onClick={()=>{nextTestNum(TestNum + 1)}}>
            시작하기
          </Button>
      </div>
      <div className="col-start-7 row-start-6">
        <Link to="/results">다음에 하기</Link>
      </div>
    </div>
  );
};

export default NotFound;
