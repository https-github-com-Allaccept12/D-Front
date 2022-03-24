import React from "react";
import { Button, Image, Container, MultiSelect, Thumbnail } from "../../../elements";

import { useHistory } from "react-router-dom";


const MySkill = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
        <div>MY SKILLS</div>
        <hr className="w-full border-4" /> 
        
        <ol className="grid grid-cols-3 md:grid-cols-5 border-l border-gray-200 dark:border-gray-700 mb-10">         

    <li className="justify-items-center items-center">
    <Thumbnail size="5" />
    </li>
    <li className="">
    <Thumbnail size="5" />
    </li>   
    <li className="">
    <Thumbnail size="5" />
    </li>   
    <li className="">
    <Thumbnail size="5" />
    </li>
    <li className="">
    <Thumbnail size="5" />
    </li>
</ol>


</div>



    </>

  );
};

export default MySkill;