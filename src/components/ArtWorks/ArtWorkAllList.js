import React from "react";
import { Button, SearchInput, Title } from "../../elements";
import ArtWorkPost from "./ArtWorkPost";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ArtWorkCategory, ArtWorkWrite } from "../../components/ArtWorks";

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
  
      <div className="items-center justify-center gap-5 mx-auto mt-36 md:grid md:grid-cols-4 md:grid-rows-2 md:grid-flow-col max-w-screen-2xl">

        {p.map(n => { return <ArtWorkPost size="7" main /> }) }
        </div>
        
    </>
  );

  if(b === "all") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      {/* <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
    </div> */}
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost size="3" /> }) }
    </Grid>
    <ArtWorkWrite/>
    </>
  );

      
  if(b === "uiux") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );
  if(b === "eco") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "game") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "craft") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "graphic") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "edit") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "video") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "video") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "product") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "typo") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "fashion") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "package") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
        {p.map(n => { return <ArtWorkPost /> }) }
        </Grid>
        </>
  );

  if(b === "else") return (
    <>
    <ArtWorkCategory />
    <div className="bg-dgray-200 h-[3.7rem] w-full"></div>
    <Grid>
      <div className="flex items-center justify-around w-full space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="w-full border " />
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