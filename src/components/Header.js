import React from "react";
import { Grid, Title } from "../elements";
import DropDown from "./DropDown"

import { useHistory, Link } from "react-router-dom";


const Header = (props) => {
  let history = useHistory();
  return (
    <Grid>
        <Title><Link to="/">홈</Link></Title>
        <Title><Link to="/artwork">Artwork</Link></Title>
        <Title><Link to="/dimo">Dimo</Link></Title>
        <Title><Link to="/myspace">MySpace</Link></Title>
        <Title><Link to="/myposts">MyPosts</Link></Title>
        <DropDown list01="이거" list02="저거" />
    </Grid>
    
  );
};

export default Header;