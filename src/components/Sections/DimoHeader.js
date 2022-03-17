import React from "react";
import { Grid, Title, Image, Button } from "../../elements";
import { getCookie } from "../../shared/cookie";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const DimoHeader = (props) => {

    return (
<>
<div className="w-full bg-yellow-200 h-16 
">  
<div className="flex flex-row justify-start items-center gap-5 ml-2">
    <Link to="dimoqna">
      <Title size="2">QnA</Title></Link>
    <Link to="dimoshared">
      <Title size="2">정보공유</Title></Link>
      </div>
    </div>
</>
  );

  
};

export default DimoHeader;