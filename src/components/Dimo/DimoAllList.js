import React from "react";
import { Button, SearchInput, Title } from "../../elements";
import { DimoWorkPost } from "../Dimo";
import tw from "tailwind-styled-components";
import { useHistory, useLocation } from "react-router-dom";

const Grid = tw.div` 
flex flex-row flex-wrap items-center gap-4
` 


const p = [{"1": "1"}, {"2":"2"}, {"3":"3"}, {"4":"4"}, {"5":"5"}, {"6":"6"}, {"7":"7"},  {"8":"8"}, {"9":"9"}, {"10":"10"}]

const DimoAllList = (props) => {
  let history = useHistory();
  const location = useLocation();
  const a = location.pathname
  const b = a.split("/")[3]
  console.log(b)
  if(b === "all") return (
    <>

    <Grid>
    <div className="flex items-center w-full justify-around space-x-36">
      <div className="box-border rounded-full 
      bg-white border border-black h-[2.5rem]
      flex justify-center items-center px-10 my-5"
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10 " />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
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
      ><button>인기순</button> <button>최신순</button> <button>팔로우디자이너</button></div> 
      <SearchInput />
      </div>
      <hr className="border w-full mb-10" />
        {p.map(n => { return <DimoWorkPost /> }) }
        </Grid>
        </>
  );
  else {
    return (
      null
    )
  }
};

export default DimoAllList;