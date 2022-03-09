import React from "react";
import { Grid, Title, Image, Text } from "../elements";
import DropDown from "./DropDown"


import { useHistory, Link } from "react-router-dom";


const SideBar = (props) => {
  let history = useHistory();
  const {
    children,
  } = props;

  return (
    <div className="w-2/5 p-4 mt-10 bg-gray-400 shadow-md rounded-md h-96">
        <Text size="large">카테고리</Text>
        {children}
        
    </div>
    
  );
};

export default SideBar;