import React from "react";
import { Grid, Title, Image, ColGrid } from "../elements";
import DropDown from "./DropDown"

import { useHistory, Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const Header = (props) => {
  let history = useHistory();
  return (
      <div className="grid grid-cols-9 bg-slate-800 justify-items-center items-center">
        <div className="flex-shrink-0"><Image /></div>
        <Title><Link to="/">홈</Link></Title>
        <Title><Link to="/artwork">Artwork</Link></Title>
        <Title><Link to="/dimo">Dimo</Link></Title>
        <Title><Link to="/myspace">MySpace</Link></Title>
        <Title><Link to="/myposts">logins</Link></Title>
        <Title><Link to="/createart">make</Link></Title>
        <Title><Link to="/createprofile">cre!</Link></Title>
        <GoogleIcon />
        </div>
        

    
  );
};

export default Header;