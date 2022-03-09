import React from "react";
import { Button, Input, Container, Text, Title, Grid } from "../elements";
import { PostList, SimpleSlider } from "../components";
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
        <div className="flex flex-row justify-center items-center p-14">
          <div className="flex flex-col justify-between w-1/3 m-4">
          <Text size="large">Hot 디자이너</Text>
          <Text>현재 가장 많은 관심을 받은 디자이너님들을 소개합니다</Text>
          </div>
          <SimpleSlider />
          
          </div>
     
          </Container>
      
      <Container color="trans" size="small">

      <div className="text-4xl mt-32 ml-24 font-sanss2">추천 아트워크</div>
      <PostList />
      </Container>
    </div>
  );
};

export default Main;