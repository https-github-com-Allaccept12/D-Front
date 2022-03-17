import React from "react";
import { Grid, Title, Image, Text, Input, Button } from "../../elements";


import { useHistory, Link } from "react-router-dom";


const AdjBar = (props) => {
  let history = useHistory();
  const {write} = props;
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
        <Button size="2">🐧인기순 /🐧최신순/🐧팔로우 디자이너</Button>

        <div className="">
        <div className="relative text-gray-600">
        <Button size="2">
{
  write === "artwork" && <Link to="/createart">글쓰기</Link>
}
{
  write === "dimoqna" && <Link to="/createdimo/qna">QnA글쓰기</Link>
}
{
  write === "dimoshared" && <Link to="/createdimo/shared">꿀팁글쓰기</Link>
}
          
          </Button>

</div>
        </div>

    </div>


    
  );
};

export default AdjBar;