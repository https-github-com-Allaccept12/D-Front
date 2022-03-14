import React from "react";
import { Button, Grid, Image, Input } from "../elements";

import { useHistory,  Link } from "react-router-dom";
import { useToggle } from "../hooks";
import { MySpaceUser, AllList, MyExp, Tabs, MiniTabs, MyPortfolio, MySkill, MyTimeLine, CreateMyIntro, CreateMySpaceUser, CreateMyExp } from "../components";
import MyArtWork from "../components/Posts/MyArtWork";
import { useTabs } from "../hooks";

const array_sample = [
{
  tab: "내정보",
  content: <CreateMySpaceUser />,
},
{
  tab: "소개",
  content: <CreateMyIntro />,
},
{
  tab: "업무경험",
  content: <CreateMyExp />,
},
{
  tab: "포트폴리오",
  content: <MyPortfolio />,
},
{
  tab: "작업 및 직업스킬",
  content: <MySkill />,
},
]


const EditMySpace = (props) => {

  const [sideEdit, setSideEdit] = useToggle();
  let history = useHistory();
  const {currentItem, changeItem} = useTabs(0, array_sample);

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
        <div className="bg-blue-500 m-1"><Link to="/createprofile">cre!</Link> </div>
        <div className="bg-blue-500 m-1"><Link to="/createprofile">cre!</Link> </div>
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

  <div className="w-full grid">
    

  <div className="tab-content" id="tabs-tabContentVertical">
    <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
      aria-labelledby="tabs-home-tabVertical">
      
      <div className="fixed top-20 right-4 bg-green-400 w-40 h-64 z-50">
        프로그래스바
          {array_sample.map((arrays, index) => 
      (
        <div className="gird">

        <div className=" bg-slate-300 rounded-md m-1 cursor-pointer text-xs md:text-sm" onClick={()=>changeItem(index)}>
				{arrays.tab}</div>
        </div>

        ))}

          </div>


          <div className="bg-yellow-100 p-4 justify-items-center items-center">
             <div>{currentItem.content}</div>
              

               </div>



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
    Tab 1 content
  </div>
  <div className="tab-pane fade" id="b" role="tabpanel" aria-labelledby="b-tab">
    Tab 2 content
  </div>
  <div className="tab-pane fade" id="c" role="tabpanel" aria-labelledby="c-tab">
    Tab 3 content
  </div>

</div>


  </div>

  <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
   
  <MiniTabs tabname01="aa" tabnametag01="aa-tab" tabnamelink01="#aa"
tabname02="bb" tabnametag02="bb-tab" tabnamelink02="#bb"
tabname03="cc" tabnametag03="c-tab" tabnamelink03="#cc" />
<div className="tab-content" id="tabs-tabContent">
  <div className="tab-pane fade show active" id="aa" role="tabpanel" aria-labelledby="aa-tab">
    Tab 1 content
  </div>
  <div className="tab-pane fade" id="bb" role="tabpanel" aria-labelledby="bb-tab">
    Tab 2 content
  </div>
  <div className="tab-pane fade" id="cc" role="tabpanel" aria-labelledby="cc-tab">
    Tab 3 content
  </div>
   
  </div>
</div>


</div>


    </div>

    <div className="tab-pane fade" id="tabs-forVertical" role="tabpanel"
      aria-labelledby="tabs-profile-tabVertical">
      Tab 3 content vertical
    </div>
  </div>
</div>
</div>
</>
  );
};

export default EditMySpace;