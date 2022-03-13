import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";
import ArtWorkDetail from "../Details/ArtWorkDetail";


const ArtWork = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="m-1 my-10 w-full md:w-64 md:h-72 p-1 flex justify-center items-center flex-col">
      <div>
      <button type="button" className=" active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
        <div className="h-56 md:h-64 w-64 overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="art_work" />
      </div>
      <div className="justify-start items-center flex flex-row pt-1">
        <Image size="x-small" /> <span className="font-sanss2 text-yellow-900">작가이름</span>
        <span className="flex-row-reverse font-sanss2 text-yellow-900 ml-28">❤ 12</span>
      </div>
      </button>
        
    </div>
    </div>



<>
<div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabIndex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div className="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-transparent bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          펭귄님의 작품
        </h5>

        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body relative">
        <div className="flex justify-center items-center">
        <ArtWorkDetail />
        
        </div>
      </div>
    </div>
  </div>
</div>
</>

    </>
  );
};

export default ArtWork;
