import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";
import DimoDetail from "../Details/DimoDetail";


const DimoWork = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="w-full">
      <div>
      <button type="button" className="w-full active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
        <div className="bg-red-200 w-full h-40 m-1">
        <div className="bg-yellow-400 p-2 justify-between w-full">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                        <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</p>
                        
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                    <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">별?스크랩?</p>
                </div>
                
            </div>
     <p>Q. 고민고민고민 고민고민 고민고민고민고민고민고민고민고민 고민고민 고민고민고민고민 고민고민고민고민</p>
     <p>답변하러 가기</p>
     <p>좋아요 ?? 댓글  ... 이거는뭐지</p>
     
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
        <DimoDetail />
        
        </div>
      </div>
    </div>
  </div>
</div>
</>

    </>
  );
};

export default DimoWork;
