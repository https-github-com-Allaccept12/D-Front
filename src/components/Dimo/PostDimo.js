import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";



const PostDimo = (props) => {
  let history = useHistory();
  return (
    <>
    
    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 font-sanss2">
    <button type="button" className=" active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
        <div class="flex justify-center -mt-16 md:justify-start">
            <Image size="large" alt="" />
        </div>
        <div className="flex flex-row gap-1">
        <p className="bg-red-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UI 디자인</p>
        <p className="bg-yellow-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">UX 디자인</p>
        <p className="bg-slate-300 w-20 text-center rounded-xl min-w-fit max-w-xs px-2">디자인툴</p>
        </div>
        
        <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">이런이런 고민이 있어여</h2>

        <p class="mt-2 text-gray-600 dark:text-gray-200 min-h-max h-32 max-h-32 text-ellipsis">고민고민 고민고민고민 고민고민고민 고민고민고민고민고민고민 고민고민고민 고민고민고민고민고민고민 고민고민고민 고민고민고민고민고민고민고민고민고민</p>
        
        <div class="flex justify-between mt-4">
            <p href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">답변하러 가기</p> 
            <div className="">
            <span className="text-blue-500">❤ 1 </span>
            <span className="text-blue-500"> ❤ 96</span>
            </div>
        </div>
        </button>
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

export default PostDimo;