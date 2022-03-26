import React from "react";
import { Image, Text, Input, Button, SearchInput } from "../elements";

import { Link } from "react-router-dom";

const AdjBar = (props) => {
  const { write } = props;
  return (
    <div className="flex flex-row shrink">
      <Button size="2">🐧인기순 /🐧최신순/🐧팔로우 디자이너</Button>

      {write === "artwork" && (
        <Link to="/createart">
          <Button size="2">글쓰기</Button>
        </Link>
      )}
      {write === "dimoqna" && (
        <Link to="/createdimo/qna">
          <Button size="2">QnA글쓰기</Button>
        </Link>
      )}
      {write === "dimoshared" && (
        <Link to="/createdimo/shared">
          <Button size="2">꿀팁글쓰기</Button>
        </Link>
      )}

      <SearchInput cardSize="2" />
    </div>
  );
};

export default AdjBar;
