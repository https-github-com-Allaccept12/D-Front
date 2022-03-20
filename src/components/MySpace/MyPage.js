import React from "react";

import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../../hooks";
import { MySpaceUser, AllList, MyExp, MyPortfolio, MySkill, MyTimeLine } from "../../components";
import { Tabs, MiniTabs } from "../../NavComponents";
import MyArtWork from "../../components/Posts/MyArtWork";



const MyPage = (props) => {

  let history = useHistory();


  return (
<>
    <div className=" bg-blue-400 h-52 grid col-start-1 col-end-5"> 여기에 배경이미지</div>
<div className="items-baseline md:flex bg-white">

  <ul className="nav nav-tabs list-none border-x-4 px-3 my-5
  md:border-r-8 md:border-l-0 border-white pl-0
  grid
  " id="tabs-tabVertical"
    role="tablist">
      <li className="nav-item text-center font-min1 text-lg font-bold">My Profile</li>
    <li className="nav-item text-center
    " role="presentation">
      <a href="#tabs-homeVertical" className="
          nav-link block
          font-medium text-xs
          leading-tight uppercase
          px-3 py-2
hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        " 
        id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
        aria-controls="tabs-homeVertical" aria-selected="true">Profile</a>
        <li className="nav-item text-center hover:bg-gray-100 px-3 py-2 text-sm font-min2"><Link to="/myspace/editmyspace">프로필수정</Link> </li>
 
 
    </li>
    
    <li className="nav-item text-center font-min1 text-lg font-bold">Work</li>
    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-workVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-3 py-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-workVertical" role="tab"
        aria-controls="tabs-workVertical" aria-selected="false">내 작업</a>
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
          px-3 py-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-for-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-forVertical" role="tab"
        aria-controls="tabs-forVertical" aria-selected="false">스크랩</a>
        
    </li>
    <li className="nav-item text-center font-min1 text-lg font-bold">Community</li>

    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-dimoVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-3 py-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-for-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-dimoVertical" role="tab"
        aria-controls="tabs-dimoVertical" aria-selected="false">qna</a>
        
    </li>

    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-dimo2Vertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-3 py-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-dimo2Vertical" role="tab"
        aria-controls="tabs-dimo2Vertical" aria-selected="false">정보공유</a>
        
    </li>

  </ul>

  <div className="w-full grid grid-cols-5">
  <MySpaceUser />

  <div className="tab-content col-start-1 col-span-5" id="tabs-tabContentVertical">
    <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
      aria-labelledby="tabs-home-tabVertical">

      <MyExp />
      <MyPortfolio />
      <MySkill />
      <MyTimeLine />
      
    </div>

    <div className="tab-pane fade" id="tabs-workVertical" role="tabpanel" aria-labelledby="tabs-work-tabVertical">

        <MyArtWork />
    </div>


    <div className="tab-pane fade" id="tabs-forVertical" role="tabpanel"
    aria-labelledby="tabs-for-tabVertical">
    스크랩
    </div>

    <div className="tab-pane fade" id="tabs-dimoVertical" role="tabpanel"
    aria-labelledby="tabs-dimo-tabVertical">

    <MiniTabs tabname01="a" tabnametag01="a-tab" tabnamelink01="#a"
    tabname02="b" tabnametag02="b-tab" tabnamelink02="#b"
    tabname03="c" tabnametag03="c-tab" tabnamelink03="#c"
    tabname04="c" tabnametag04="c-tab" tabnamelink04="#c" />
    <div className="tab-content" id="tabs-tabContent">
      <div className="tab-pane fade show active" id="a" role="tabpanel" aria-labelledby="a-tab">
        <div className="flex flex-row flex-wrap p-5"><AllList /></div>
        
      </div>
      <div className="tab-pane fade" id="b" role="tabpanel" aria-labelledby="b-tab">
      <div className="flex flex-row flex-wrap p-5"><AllList /></div>
      </div>
      <div className="tab-pane fade" id="c" role="tabpanel" aria-labelledby="c-tab">
      <div className="flex flex-row flex-wrap p-5"><AllList /></div>
      </div>
      <div className="tab-pane fade" id="c" role="tabpanel" aria-labelledby="c-tab">
      <div className="flex flex-row flex-wrap p-5"><AllList /></div>
      </div>

    </div>



      
    


</div>

<div className="tab-pane fade" id="tabs-dimo2Vertical" role="tabpanel"
    aria-labelledby="tabs-dimo2-tabVertical">

       <MiniTabs tabname01="aa" tabnametag01="aa-tab" tabnamelink01="#aa"
        tabname02="bb" tabnametag02="bb-tab" tabnamelink02="#bb"
        tabname03="cc" tabnametag03="c-tab" tabnamelink03="#cc"
        tabname04="cc" tabnametag04="c-tab" tabnamelink04="#cc" />
        <div className="tab-content" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="aa" role="tabpanel" aria-labelledby="aa-tab">
          <div className="flex flex-row flex-wrap p-5"><AllList /></div>
          </div>
          <div className="tab-pane fade" id="bb" role="tabpanel" aria-labelledby="bb-tab">
          <div className="flex flex-row flex-wrap p-5"><AllList /></div>
          </div>
          <div className="tab-pane fade" id="cc" role="tabpanel" aria-labelledby="cc-tab">
          <div className="flex flex-row flex-wrap p-5"><AllList /></div>
          </div>
          <div className="tab-pane fade" id="cc" role="tabpanel" aria-labelledby="cc-tab">
          <div className="flex flex-row flex-wrap p-5"><AllList /></div>
          </div>
   
  </div>

</div>






</div>
    </div>


  </div>

</>


  );
};

export default MyPage;