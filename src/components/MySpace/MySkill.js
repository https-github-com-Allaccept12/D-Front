import React from "react";
import { Button, Image, Container, MultiSelect, Thumbnail } from "../../elements";

import { useHistory } from "react-router-dom";


const MySkill = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">
        <div>MY SKILLS</div>
        <hr className="w-full border-4" /> 
        <MultiSelect title="대표스킬" />
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

<div>작업기간</div>
        <hr className="w-full border-4" /> 
<div className="bg-white w-full">
<div className="border-yellow-300 w-full border-4
grid grid-cols-12 items-center justify-items-center">
    
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>
<p>11</p>
<p>12</p>
</div>
<hr className="w-full border-2 col-span-full" /> 
<div className="p-2 m-2 bg-red-300 w-32 h-5 rounded-2xl
"></div>
<div className="p-2 m-2 bg-blue-300 w-2/3 h-5 rounded-2xl "></div>
<div className="p-2 m-2 bg-yellow-300 w-1/3 h-5 rounded-2xl"></div>
<div className="p-2 m-2 bg-red-300 w-16 h-5 rounded-2xl "></div>

<hr className="w-full border-4 col-span-full" /> 

</div>
</div>



    </>

  );
};

export default MySkill;