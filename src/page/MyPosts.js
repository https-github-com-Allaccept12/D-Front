import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";


const MyPosts = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        내가 작성한 게시글 페이지
      </Button>
    </div>
  );
};

export default MyPosts;