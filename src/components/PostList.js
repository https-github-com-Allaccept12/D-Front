import React from "react";
import { Button } from "../elements";
import Post from "./Post";

import { useHistory } from "react-router-dom";

const p = [{"d": "1"}, {"d":"2"}, {"d":"3"}, {"d":"4"}, {"d":"5"}, {"d":"6"}, {"d":"7"},  {"d":"8"}, {"d":"9"}, {"d":"10"}]

const PostList = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-row justify-center items-center flex-wrap">

        {p.map(n => { return <Post /> }) }
    </div>
  );
};

export default PostList;