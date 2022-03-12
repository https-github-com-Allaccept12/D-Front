import React from "react";
import { Button } from "../../elements";
import ArtWork from "./ArtWork";
import DimoWork from "../Dimo/DimoWork"
import MyArtWork from "../MySpace/MyArtWork";
import tw from "tailwind-styled-components";

import { useHistory, useLocation } from "react-router-dom";

const Grid = tw.div` 
grid md:grid-cols-3 xl:grid-cols-4 justify-items-center
` 

const p = [{"1": "1"}, {"2":"2"}, {"3":"3"}, {"4":"4"}, {"5":"5"}, {"6":"6"}, {"7":"7"},  {"8":"8"}, {"9":"9"}, {"10":"10"}]

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
    <Grid>

        {p.map(n => { return <ArtWork /> }) }
    </Grid>
      );
  if(b === "myspace") return (
    <Grid>
      <div className="">내 작품 보기</div>
        {p.map(n => { return <MyArtWork /> }) }
    </Grid>
  );
  if(b === "dimo") return (
    <>
        {p.map(n => { return <DimoWork /> }) }
    </>
  );
};

export default ArtWorkList;