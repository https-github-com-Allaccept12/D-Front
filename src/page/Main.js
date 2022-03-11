import React from "react";
import { Button, Input, Container, Text, Title, Grid } from "../elements";
import { ArtWorkList, MainSlider } from "../components";
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
        <Container>
        <div className="flex flex-col md:flex-row justify-center items-center p-14">
          <div className="flex flex-col justify-between flex-shrink-0 w-60 p-10 mb-10">
          <Text size="large">Hot 디자이너</Text>
          <Text>현재 가장 많은 관심을 받은 디자이너님들을 소개합니다</Text>
          </div>
          <MainSlider />
          

          </div>
     
          </Container>
      
      <div className="pt-10 mt-40">

      <div className="text-3xl flex font-sanss2 justify-center items-center">추천 아트워크</div>
      <ArtWorkList />
      </div>
    </div>
  );
};

export default Main;