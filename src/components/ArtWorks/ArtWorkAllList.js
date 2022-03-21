import React from "react";
import { Button, SearchInput, Title } from "../../elements";
import ArtWorkPost from "./ArtWorkPost";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";

const Grid = tw.div` 
w-4/6 flex flex-row flex-wrap items-start justify-start ml-auto mr-52
rounded-lg bg-white pt-6 px-24 ml
` 


const p = [{"1": "1"}, {"2":"2"}, {"3":"3"}, {"4":"4"}, {"5":"5"}, {"6":"6"}, {"7":"7"},  {"8":"8"}, {"9":"9"}, {"10":"10"}]

const ArtWorkAllList = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[3]
  if(a === "/") return (
    <>
  
      <div className="mt-36 mx-auto md:grid md:grid-cols-4 md:grid-rows-2 md:grid-flow-col
      justify-center items-center gap-5 max-w-screen-2xl">

        {p.map(n => { return <ArtWorkPost size="7" main /> }) }
        </div>
        
    </>
  );

  if(b === "all") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost size="3" /> }) }
        </Grid>
        </>
      );

      
  if(b === "uiux") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );
  if(b === "eco") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "game") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "craft") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "graphic") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "edit") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "video") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "video") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "product") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "typo") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "fashion") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "package") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "else") return (
    <>
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      >인기순 최신순 팔로우디자이너</div> 
      <SearchInput />
      </div>
      <hr className="border w-full " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );
  else {
    return (
      null
    )
  }
};

export default ArtWorkAllList;