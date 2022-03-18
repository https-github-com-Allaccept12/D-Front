import React from "react";
import { Grid, Title, Image, Text, Card, Profile, Button } from "../../elements";


import { useHistory, Link } from "react-router-dom";
import {ArtWork, DimoWork } from "../../components";


const Slides = (props) => {
  const { main, artwork, dimo } = props;
  let history = useHistory();
  if(main) return (
    <>
     <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="bg-transparent bg-center bg-cover rounded-lg">
          <Card size="5" src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg" />
          </div>

        <div className="-mt-36 overflow-hidden bg-white
        rounded-b-xl bg-dpurple-200 w-[18.75rem] h-[8.75rem]">
            <div className="absolute bottom-[82px] pl-6 hover:scale-110 cursor-pointer">
            <Profile size="4" main />
            </div>
            <div className="pl-36 pt-4">
            <Title size="5">펭귄 님</Title>
            <div className="-mt-1">
            <Text size="5">그래픽 디자인 UI/UX </Text>
            </div>
            </div>
            <div className="flex justify-center mt-4">
            <Button size="3" color="3">팔로우</Button>
            </div>
        </div>
    </div>
    </>


  );
  if(artwork) return (
      <>
      <div className="max-w-sm py-2 mx-auto mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 font-sanss2">
          <Image shape="big_square" />
      </div>
      
      </>
  );

  if(dimo) return (
    <>
    <DimoWork size="3" />
    </>
  );
};

export default Slides;