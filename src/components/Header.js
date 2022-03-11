import React from "react";
import { Grid, Title, Image } from "../elements";
import DropDown from "./DropDown"

import { useHistory, Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const Header = (props) => {
  let history = useHistory();
  return (
    <div className="w-full flex flex-row justify-center items-center md:justify-start bg-blue-400">
        <div className="flex-shrink-0"><Image /></div>
        <Title><Link to="/">홈</Link></Title>
        <Title><Link to="/artwork">Artwork</Link></Title>
        <Title><Link to="/dimo">Dimo</Link></Title>
        <Title><Link to="/myspace">MySpace</Link></Title>
        <Title><Link to="/myposts">logins</Link></Title>
        <Title></Title>


        <div className="pb-10">

        </div>
        
        </div>
    
  );
};

export default Header;