import React from "react";
import { Button, Image } from "../elements";

import { useHistory } from "react-router-dom";


const Post = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="m-1 my-10 w-full md:w-64 md:h-72 p-1 flex justify-center items-center flex-col">
      <div className="">
      <button type="button" className=" active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
        <div className="h-56 md:h-64 w-64 overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" shape="art_work" />
      </div>
      <div className="justify-start items-center flex flex-row pt-1">
        <Image size="x-small" /> <span className="font-sanss2 text-white">작가이름</span>
        <span className="flex-row-reverse font-sanss2 text-white ml-28">❤ 12</span>
      </div>
      </button>
        
    </div>
    </div>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
          클릭하면 작품이 나오게!
        </h5>

        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div class="modal-body relative p-4">
        <div className="flex justify-center items-center">
        <Image src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg" shape="detail_square" size="5xl" />
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Post;