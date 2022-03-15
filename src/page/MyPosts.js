import React from "react";
import { Title, Subtitle, Text, Thumbnail, Profile, CheckBox, RadioButton, Card } from "../elements";

import { useHistory } from "react-router-dom";

import { SocialLogin } from "../components";

const MyPosts = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="flex flex-col p-3 justify-center items-center">
      크리에이트 폼 모아놓기
      <SocialLogin />

    </div>
    <div className="flex flex-row flex-wrap w-5/6">
        <Card size="1" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Card size="2" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Card size="3" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Card size="4" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Card size="5" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Card size="6" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        </div>

    
    <CheckBox inline="저장" size="1" color="1"  />
    <CheckBox inline="저장dd" size="1" color="2"  />
    <CheckBox inline="저장" size="2" color="1" />
    <CheckBox inline="저장" size="2" color="2" />

    <RadioButton inline="저장" size="1" color="1"  />
    <RadioButton inline="저장dd" size="1" color="2"  />
    <RadioButton inline="저장" size="2" color="1" />
    <RadioButton inline="저장" size="2" color="2" />
    <div className="w-40 flex flex-row">
        <div className="bg-dgray-100 w-5 p-5">a</div>
        <div className="bg-dgray-200 w-5 p-5">a</div>
        <div className="bg-dgray-300 w-5 p-5">a</div>
        <div className="bg-dgray-400 w-5 p-5">a</div>
        <div className="bg-dgray-500 w-5 p-5">a</div>
        <div className="bg-dgray-600 w-5 p-5">a</div>
        <div className="bg-white w-5 p-5">a</div>
        <div className="bg-dgray-900 w-5 p-5">a</div>        
        </div>

        <div className="w-40 flex flex-row">
        <div className="bg-dred-100 w-5 p-5">a</div>
        <div className="bg-dred-200 w-5 p-5">a</div>
        <div className="bg-dred-300 w-5 p-5">a</div>
        <div className="bg-dred-400 w-5 p-5">a</div>
        <div className="bg-dred-500 w-5 p-5">a</div>
        <div className="bg-white w-5 p-5">a</div>
        <div className="bg-dpurple-100 w-5 p-5">a</div>
        <div className="bg-dpurple-200 w-5 p-5">a</div>
        <div className="bg-dpurple-300 w-5 p-5">a</div>
        <div className="bg-dpurple-400 w-5 p-5">a</div>
        </div>

        <Title size="1" >타이틀1</Title>
        <Title size="2" >타이틀1</Title>
        <Title size="3" >타이틀1</Title>
        <Title size="4" >타이틀1</Title>
        <Title size="5" >타이틀1</Title>
        <Title size="6" >타이틀1</Title>
        <Subtitle size="1" >서브타이틀1</Subtitle>
        <Subtitle size="2" >서브타이틀1</Subtitle>
        <Text size="1" >타이틀1</Text>
        <Text size="2" >타이틀1</Text>
        <Text size="3" >타이틀1</Text>
        <Text size="4" >타이틀1</Text>
        <Text size="5" >타이틀1</Text>
        <Text size="6" >타이틀1</Text>
        <Text size="7" >타이틀1</Text>
<div className="flex flex-row">
        <Thumbnail size="1" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Thumbnail size="2" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Thumbnail size="3" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Thumbnail size="4" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        <Thumbnail size="5" src="https://press.ikidane-nippon.com/wordpress/wp-content/uploads/2019/03/key-1-1.jpg" />
        </div>

        <div className="flex flex-row">
        <Profile size="1" />
        <Profile size="2" />
        <Profile size="3" />
        <Profile size="4" />
        <Profile size="5" />
        <Profile size="6" />
        <Profile size="7" />
        <Profile size="8" />
        </div>


    </>
  );
};

export default MyPosts;