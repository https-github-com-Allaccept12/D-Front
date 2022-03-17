import React from "react";
import { Button, Grid, Image } from "../elements";

import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../hooks";
import { MySpaceUser, AllList, MyExp, Tabs, MiniTabs, MyPortfolio, MySkill, MyTimeLine } from "../components";
import MyArtWork from "../components/Posts/MyArtWork";




const MySpace = (props) => {

  const [sideEdit, setSideEdit] = useToggle();
  let history = useHistory();


  return (
<>
    <div className=" bg-blue-400 h-52 grid col-start-1 col-end-5"> 여기에 배경이미지</div>
<div className="items-baseline md:flex bg-white">

  <ul className="nav nav-tabs list-none border-x-4 
  md:border-r-4 md:border-l-0 border-blue-600 pl-0
  grid
  " id="tabs-tabVertical"
    role="tablist">
    <li className="nav-item text-center
    " role="presentation">
      <a href="#tabs-homeVertical" className="
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
        " 
        onClick={setSideEdit}
        id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
        aria-controls="tabs-homeVertical" aria-selected="true">Profile🔽</a>
      { sideEdit ?  <>
        <div className="bg-blue-500 m-1"><Link to="/editmyspace">프로필수정</Link> </div>

        </> : ""}  
 
    </li>


    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-profileVertical" className="
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


    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-messagesVertical" className="
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

    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-forVertical" className="
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
        " id="tabs-for-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-forVertical" role="tab"
        aria-controls="tabs-forVertical" aria-selected="false">스크랩</a>
        
    </li>


  </ul>

  <div className="w-full grid grid-cols-5">
    

  <div className="tab-content col-start-1 col-span-5" id="tabs-tabContentVertical">
    <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
      aria-labelledby="tabs-home-tabVertical">
      <MySpaceUser />
      <MyExp />
      <MyPortfolio />
      <MySkill />
      <MyTimeLine />
      
    </div>
    <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
        <MyArtWork />
    </div>

    <div className="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
      aria-labelledby="tabs-profile-tabVertical">
<Tabs />

<div className="tab-content" id="tabs-tabContentJustify">


  <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
    aria-labelledby="tabs-home-tabJustify">
    
<MiniTabs tabname01="a" tabnametag01="a-tab" tabnamelink01="#a"
tabname02="b" tabnametag02="b-tab" tabnamelink02="#b"
tabname03="c" tabnametag03="c-tab" tabnamelink03="#c" />
<div className="tab-content" id="tabs-tabContent">
  <div className="tab-pane fade show active" id="a" role="tabpanel" aria-labelledby="a-tab">
    <AllList />
  </div>
  <div className="tab-pane fade" id="b" role="tabpanel" aria-labelledby="b-tab">
    <AllList />
  </div>
  <div className="tab-pane fade" id="c" role="tabpanel" aria-labelledby="c-tab">
    <AllList />
  </div>

</div>


  </div>

  <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
   
  <MiniTabs tabname01="aa" tabnametag01="aa-tab" tabnamelink01="#aa"
tabname02="bb" tabnametag02="bb-tab" tabnamelink02="#bb"
tabname03="cc" tabnametag03="c-tab" tabnamelink03="#cc" />
<div className="tab-content" id="tabs-tabContent">
  <div className="tab-pane fade show active" id="aa" role="tabpanel" aria-labelledby="aa-tab">
    <AllList />
  </div>
  <div className="tab-pane fade" id="bb" role="tabpanel" aria-labelledby="bb-tab">
    <AllList />
  </div>
  <div className="tab-pane fade" id="cc" role="tabpanel" aria-labelledby="cc-tab">
    <AllList />
  </div>
   
  </div>
</div>


</div>


    </div>

    <div className="tab-pane fade" id="tabs-forVertical" role="tabpanel"
      aria-labelledby="tabs-profile-tabVertical">
      <AllList />
    </div>
  </div>
</div>
</div>
</>
  );
};

export default MySpace;