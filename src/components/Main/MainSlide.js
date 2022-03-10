import React from "react";
import { Grid, Title, Image, Text, Input } from "../../elements";
import DropDown from "../DropDown"

import { useHistory, Link } from "react-router-dom";


const SlideBottom = (props) => {
  let history = useHistory();
  return (
    <>
     <div class="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div class="w-full h-64 bg-transparent bg-center bg-cover rounded-lg">
          <Image shape="big_square" src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg" />
          </div>

        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <div className="absolute bottom-8 pl-8 hover:scale-110 cursor-pointer">
            <Image size="large" />
            </div>
            <h2 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">펭귄 님</h2>
            
            <div class="flex items-center justify-between px-3 py-1 bg-gray-100 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">UI / UX 디자인</span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-800 rounded hover:bg-blue-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">FOLLOW</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default SlideBottom;