import React from "react";
import { Button } from "../../elements";
import {MainSlider, AllList, AdjBar} from "../../components";

import { useHistory } from "react-router-dom";

import { useToggle } from "../../hooks";
import { Tab } from "@mui/material";


const MiniTabs = (props) => {
  const {
    tabname01,
    tabnametag01,
    tabnamelink01,
    tabname02,
    tabnametag02,
    tabnamelink02,
    tabname03,
    tabnametag03,
    tabnamelink03,
  } = props;

  return (
    <>
    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
  role="tablist">
  <li className="nav-item" role="presentation">
    <a href={tabnamelink01} className="
      nav-link
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
    " id={tabnametag01} data-bs-toggle="pill" data-bs-target={tabnamelink01} role="tab" aria-controls={tabname01}
      aria-selected="true">내 글</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href={tabnamelink02} className="
      nav-link
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
    " id={tabnametag02} data-bs-toggle="pill" data-bs-target={tabnamelink02} role="tab"
      aria-controls={tabname02} aria-selected="false">내 댓글</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href={tabnamelink03} className="
      nav-link
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
    " id={tabnametag03} data-bs-toggle="pill" data-bs-target={tabnamelink03} role="tab"
      aria-controls={tabname03} aria-selected="false">내가 스크랩한 글</a>
  </li>

</ul>

    </>
  );
};

   
MiniTabs.defaultProps = {
    tabname: "",
    tabnametag: "",
    tabnamelink: ""
  };

export default MiniTabs;
