import React from "react";
import { Button, Title } from "../../elements";
import ArtWork from "../Posts/ArtWork";
import DimoWork from "../Posts/DimoWork"
import MyArtWork from "../Posts/MyArtWork";
import tw from "tailwind-styled-components";
import "./AllList.css"
import { useHistory, useLocation } from "react-router-dom";

const Grid = tw.div` 
grid md:grid-cols-3 xl:grid-cols-4 justify-items-center
` 


const p = [{"1": "1"}, {"2":"2"}, {"3":"3"}, {"4":"4"}, {"5":"5"}, {"6":"6"}, {"7":"7"},  {"8":"8"}, {"9":"9"}, {"10":"10"}]

const AllList = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[1]
  if(a === "/") return (
    <>
    
   
    <div className="md:row-start-1 justify-items-center items-center mt-10 Arts hidden md:flex"><Title size="4"> 추천 아트워크</Title></div>
      <div className="mt-16 mx-auto flex flex-row flex-wrap justify-center items-center gap-5 px-16">
        {p.map(n => { return <ArtWork /> }) }
        </div>
    </>
  );
  if(b === "artwork") return (
    <Grid>

        {p.map(n => { return <ArtWork /> }) }
        </Grid>
      );

      
  if(b === "dimoqna") return (
    <>
    <div className="grid
      sm:grid-cols-2 xl:grid-cols-3 justify-items-center items-center">
        {p.map(n => { return <DimoWork list={b} size="4" /> }) }
        </div>
    </>
  );
  if(b === "dimoshared") return (
    <>
    <div className="grid
      sm:grid-cols-2 xl:grid-cols-3">
        {p.map(n => { return <DimoWork size="4" /> }) }
        </div>
    </>
  );

  if(b === "myspace") return (
    <>
        {p.map(n => { return <DimoWork list={b} size="4" /> }) }
    </>
  );
};

export default AllList;