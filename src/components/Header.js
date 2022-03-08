import React from "react";
import { Button, Grid } from "../elements";

import { useHistory, Link } from "react-router-dom";


const Header = (props) => {
  let history = useHistory();
  return (
    <Grid>
        <Link to="/">홈으로 가기</Link>
        <Link to="/artwork">Artwork로 가기</Link>
        <Link to="/dimo">Dimo로 가기</Link>
        <Link to="/myspace">MySpace로 가기</Link>
        <Link to="/myposts">MyPosts로 가기</Link>
    </Grid>
  );
};

export default Header;