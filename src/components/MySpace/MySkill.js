import React from "react";
import { Button, Image, Container } from "../../elements";

import { useHistory } from "react-router-dom";


const MySkill = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
        <div>MY SKILLS</div>
        <hr className="w-full border-4" /> 
        
        <ol className="grid grid-cols-4 border-l border-gray-200 dark:border-gray-700 mb-10">         

    <li className="mb-10 ml-4 row-start-1 col-start-1">
        <Image shape="art_work"/>
    </li>
    <li className="mb-10 ml-4 row-start-1 col-start-2">
        <Image shape="art_work" />
    </li>   
    <li className="mb-10 ml-4 row-start-1 col-start-3">
        <Image shape="art_work" />
    </li>   
    <li className="mb-10 ml-4 row-start-1 col-start-4">
        <Image shape="art_work" />
    </li>
</ol>
</div>



    </>

  );
};

export default MySkill;