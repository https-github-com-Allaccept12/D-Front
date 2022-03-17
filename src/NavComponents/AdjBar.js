import React from "react";
import { Image, Text, Input, Button } from "../elements";


import { Link } from "react-router-dom";


const AdjBar = (props) => {
  const {write} = props;
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
        <Button size="2">🐧인기순 /🐧최신순/🐧팔로우 디자이너</Button>


{
  write === "artwork" && <Link to="/createart"><Button size="2">글쓰기</Button></Link>
}
{
  write === "dimoqna" && <Link to="/createdimo/qna"><Button size="2">QnA글쓰기</Button></Link>
}
{
  write === "dimoshared" && <Link to="/createdimo/shared"><Button size="2">꿀팁글쓰기</Button></Link>
}


    </div>


    
  );
};

export default AdjBar;