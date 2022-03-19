import React from "react";
import { Button, Title, Text, Subtitle } from "../elements";
import { AllList, MainSlider, SideBar } from "../components";
import { setCookie } from "../shared/cookie";
import "./Main.css"

const Main = (props) => {

  if (sessionStorage.getItem("access_token")) {
    setCookie("access_token", sessionStorage.getItem("access_token"), 7);
    setCookie("refresh_token", sessionStorage.getItem("access_token"), 7);
  }
  

  // dispatch(userActions.loginFB({...name}));
  return (

    <div className="w-full">
      <div className="hot text-white hidden md:contents">
          <Title size="2">Hot 디자이너</Title>
        <div className="mt-4 ml-1">
          <Subtitle size="1">현재 가장 핫한<br /> 
          디자이너님들을 소개합니다</Subtitle>
          </div>
          </div>

        <div className="Main hidden sm:flex">
        <div className="justify-self-end max-w-fit hidden sm:flex">
        <MainSlider main />
        </div>

          </div>
      
      <div className="mx-auto md:pt-28 max-w-screen-2xl">
      <AllList />
      </div>
    </div>
  );
};

export default Main;