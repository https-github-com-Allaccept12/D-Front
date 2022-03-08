import React from "react";
import { Button } from "../elements";

import { useHistory, Link } from "react-router-dom";


const Header = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-row p-3 justify-center items-center gap-1 bg-yellow-400">
        <Link to="/">홈으로 가기</Link>
        <Link to="/artwork">Artwork로 가기</Link>
        <Link to="/dimo">Dimo로 가기</Link>
        <Link to="/myspace">MySpace로 가기</Link>
        <Link to="/myposts">MyPosts로 가기</Link>
    </div>
  );
};

export default Header;