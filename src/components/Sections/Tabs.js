import React from "react";
import { Button } from "../../elements";
import {MainSlider, AllList, AdjBar} from "../../components";



import { useHistory } from "react-router-dom";

import { useToggle } from "../../hooks";


const Tabs = (props) => {
  let history = useHistory();

  return (
    <>
<ul className="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"

id="tabs-tabJustify" role="tablist">
  <li className="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-homeJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
      aria-controls="tabs-homeJustify" aria-selected="true">QnA</a>
  </li>
  <li className="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-profileJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " 
 
    id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
      aria-controls="tabs-profileJustify" aria-selected="false">정보 공유</a>
  </li>

</ul>

    </>
  );
};

export default Tabs;
