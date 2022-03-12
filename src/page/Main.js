import React from "react";
import { Button, Input, Container, Text, Title, Grid } from "../elements";
import { ArtWorkList, MainSlider, SideBar } from "../components";
import { useHistory } from "react-router-dom";
import { useInput } from "../hooks";

const Main = (props) => {
  let history = useHistory();
  const noEmail = v => !v.includes("@");
  const maxLen = v => v.length < 10;
  const name = useInput("이름은최대10글자", maxLen);
  

  // dispatch(userActions.loginFB({...name}));
  return (
    <div>
        <div className="grid md:grid-cols-10 grid-rows-3 bg-red-200 p-2">
        <div className="row-start-2 col-start-1 col-span-2 font-sanss2 p-2 md:pl-10">
          <p>Hot 디자이너</p>
          <p>현재 가장 많은 관심을 받은 디자이너님들을 소개합니다</p>
         </div>
        <div className="col-start-3 col-span-8 row-span-3">
        <MainSlider />
        </div>
          </div>
      
      <div className="grid">
      <div className="grid md:grid-cols-6 col-start-1 text-2xl px-4 pt-4">추천 아트워크</div>
      <ArtWorkList />
      </div>
    </div>
  );
};

export default Main;