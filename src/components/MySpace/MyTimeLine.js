import React from "react";
import { Button, Image, Container } from "../../elements";

import { useHistory } from "react-router-dom";


const MyTimeLine = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
        <div>MY SKILLS</div>
        <hr className="w-full border-4" /> 
        
        <ol className="grid grid-cols-4 border-l border-gray-200 dark:border-gray-700 mb-10">         

    <li className="mb-10 ml-4 row-start-1 col-start-1">
        여기에 아마 캘린더가 들어갈거 같은데 구현하려면 캘린더 + moment로 날짜받기 등등 할게 엄청 많음..
    </li>


    <li className="mb-10 ml-4 row-start-1 col-start-4">
        <Image shape="art_work" />
    </li>
</ol>
</div>



    </>

  );
};

export default MyTimeLine;