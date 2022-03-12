import React from "react";
import { Button } from "../../elements";
import ArtWork from "./ArtWork";
import DimoWork from "../Dimo/DimoWork"
import MyArtWork from "../MySpace/MyArtWork";

import { useHistory, useLocation } from "react-router-dom";


const p = [{"d": "1"}, {"d":"2"}, {"d":"3"}, {"d":"4"}, {"d":"5"}, {"d":"6"}, {"d":"7"},  {"d":"8"}, {"d":"9"}, {"d":"10"}]

const ArtWorkList = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[1]
  if(a === "/") return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center">

        {p.map(n => { return <ArtWork /> }) }
    </div>
  );
  if(b === "artwork") return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center">

        {p.map(n => { return <ArtWork /> }) }
    </div>
      );
  if(b === "myspace") return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center">
      <div className="">내 작품 보기</div>
        {p.map(n => { return <MyArtWork /> }) }
    </div>
  );
  if(b === "dimo") return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {p.map(n => { return <DimoWork /> }) }
    </div>
  );
};

export default ArtWorkList;