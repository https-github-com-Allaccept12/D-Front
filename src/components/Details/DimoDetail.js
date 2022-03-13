import React from "react";
import { Button, Image, Title, Text, Input } from "../../elements";

import { useHistory } from "react-router-dom";
import {MainSlider} from "../../components";



const DimoDetail = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="flex justify-center items-center flex-col w-full overflow-y-hidden">
       <div className="bg-yellow-400 p-2 justify-between w-full">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                        <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</p>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                </div>
            </div>

      <div className="w-full mx-auto overflow-hidden bg-transparent rounded-lg shadow-md dark:bg-gray-800">

        <div className="p-6 bg-yellow-200">
            <div className="bg-yellow-200 p-2 justify-between w-full">
                <div className="flex items-center justify-center flex-col">
                    <Image shape="detail_square" />
                여기에 고민 여기에 고민여기에 고민여기에 고민여기에 고민 여기에 고민여기에 고민 여기에 고민여기에 고민여기에 고민

                <p>여기에 고민여기에 고민여기에 고민여기에 고민
                여기에 고민여기에 고민여기에 고민여기에 고민
                </p>
            </div>

 {/* 슬라이더 자리 */}

</div>

            <div className="w-full bg-white p-2 pt-4 rounded shadow-lg">
  <div className="flex ml-3">
    <div className="mr-3">
      <img src="http://picsum.photos/50" alt="" className="rounded-full" />
    </div>
    <div>
      <h1 className="font-semibold">Itay Buyoy</h1>
      <p className="text-xs text-gray-500">2 seconds ago</p>
    </div>

  </div>

  <div className="mt-3 p-3 w-full">
    <textarea rows="3" className="border p-2 rounded w-full" placeholder="Write something..."></textarea>
  </div>

  <div className="flex justify-between mx-3">
    <div><button className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
  </div>

<div className="grid grid-rows-6 grid-cols-4 p-3">

  <div className="flex ml-3">
    <div className="mr-3">
      <img src="http://picsum.photos/50" alt="" className="rounded-full" />
    </div>
    <div>
      <h1 className="font-semibold">Itay Buyoy</h1>
      <p className="text-xs text-gray-500">2 seconds ago</p>
    </div>

  </div>
  <div className="col-span-3 justify-items-center"><Input /></div>
  
  </div>

</div>
        </div>



    </div>
    </div>
    <div className="fixed top-24 lg:right-12 xl:right-24 2xl:right-52">
      <div className="flex flex-row md:flex-col gap-1">
            <button><Image /></button>
            <button><Image /></button>
            <button><Image /></button>
            <button><Image /></button>
            <button><Image /></button>
            </div>
          </div>
</>
  );
};

export default DimoDetail;