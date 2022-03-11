import React from "react";
import { Button } from "../../elements";
import ArtWork from "./ArtWork";
import MyArtWork from "../MySpace/MyArtWork";

import { useHistory, useLocation } from "react-router-dom";
import PostDimo from "../Dimo/PostDimo";

const p = [{"d": "1"}, {"d":"2"}, {"d":"3"}, {"d":"4"}, {"d":"5"}, {"d":"6"}, {"d":"7"},  {"d":"8"}, {"d":"9"}, {"d":"10"}]

const ArtWorkList = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[1]
  if(a === "/") return (
    <div className="flex flex-row justify-center items-center flex-wrap">

        {p.map(n => { return <ArtWork /> }) }
    </div>
  );
  if(b === "artwork") return (
    <div className="flex flex-row justify-center items-center flex-wrap">

        {p.map(n => { return <ArtWork /> }) }
    </div>
      );
  if(b === "myspace") return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-col w-full justify-center items-center font-sanss2 bg-yellow-400 p-3 font-bold">내 작품 보기</div>
        {p.map(n => { return <MyArtWork /> }) }
    </div>
  );
  if(b === "dimo") return (
    <div className="flex flex-row justify-center items-center flex-wrap">
        {p.map(n => { return <PostDimo /> }) }
    </div>
  );
};

export default ArtWorkList;