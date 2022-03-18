import React from "react";
import { Button, Title, Text } from "../elements";
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
    <div className="md:grid w-full">
      <div className="bg-red-200 w-full h-96 -z-10 absolute"></div>
        <div className="md:grid grid-rows-3 p-2 
        grid-cols-4 mt-20
        md:grid-cols-10">
        <div className="Main">
          <Title size="4">Hot 디자이너</Title>
        <div className="mt-4">
          <Text size="4">현재 가장 핫한<br /> 
          디자이너님들을 소개합니다</Text>
          </div>
         </div>
        <div className="col-span-8 col-start-3 row-span-3">
        <MainSlider main />
        </div>
          </div>
      
      <div className="md:grid">


      <AllList />
      </div>
    </div>
  );
};

export default Main;