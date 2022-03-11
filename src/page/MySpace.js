import React from "react";
import { Button, Grid, Image } from "../elements";

import { useHistory } from "react-router-dom";
import { useTabs } from "../hooks";
import { AdjBar, PostList, SideBar, MySpaceUser, ArtWorkList, MyTimeLine } from "../components";



const MySpace = (props) => {


  let history = useHistory();


  return (
<div class="items-baseline md:flex bg-white">
  <ul class="nav nav-tabs flex flex-col flex-wrap list-none border-x-4 md:border-r-4 md:border-l-0 border-blue-600 pl-0" id="tabs-tabVertical"
    role="tablist">
    <li class="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-homeVertical" class="
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
        " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
        aria-controls="tabs-homeVertical" aria-selected="true">Profile</a>
    </li>
    <li class="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-profileVertical" class="
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
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
        aria-controls="tabs-profileVertical" aria-selected="false">Artwork</a>
    </li>
    <li class="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-messagesVertical" class="
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
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
        aria-controls="tabs-messagesVertical" aria-selected="false">Dimo</a>
    </li>
  </ul>


  <div class="tab-content bg-white w-full" id="tabs-tabContentVertical">
    <div class="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
      aria-labelledby="tabs-home-tabVertical">

      <MySpaceUser />
      <MyTimeLine />
    </div>
    <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
    <MySpaceUser />
    <ArtWorkList />
    </div>
    <div class="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
      aria-labelledby="tabs-profile-tabVertical">
      <MySpaceUser />
    </div>
  </div>
</div>
  );
};

export default MySpace;