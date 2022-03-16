import React from "react";
import { Button, Input } from "../elements";
import { AllList, MainSlider, SideBar } from "../components";
import { setCookie } from "../shared/cookie";

const Main = (props) => {

  if (sessionStorage.getItem("access_token")) {
    setCookie("access_token", sessionStorage.getItem("access_token"), 7);
    setCookie("refresh_token", sessionStorage.getItem("access_token"), 7);
  }
  

  // dispatch(userActions.loginFB({...name}));
  return (
    <div>
        <div className="grid grid-rows-3 p-2 bg-red-200 md:grid-cols-10">
        <div className="col-span-2 col-start-1 row-start-2 p-2 font-sanss2 md:pl-10">
          <p>Hot 디자이너</p>
          <p>현재 가장 많은 관심을 받은 디자이너님들을 소개합니다</p>
         </div>
        <div className="col-span-8 col-start-3 row-span-3">
        <MainSlider main />
        </div>
          </div>
      
      <div className="grid">

      <div className="grid col-start-1 px-4 pt-4 text-2xl md:grid-cols-6">추천 아트워크</div>
      <AllList />
      </div>
    </div>
  );
};

export default Main;