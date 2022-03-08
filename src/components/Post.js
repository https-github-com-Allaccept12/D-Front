import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";


const Post = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <div className="w-40 h-40 bg-blue-300">
          포스트
      </div>
    </div>
  );
};

export default Post;