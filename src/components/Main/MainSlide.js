import React from "react";
import { Grid, Title, Image, Text, Input } from "../../elements";
import DropDown from "../DropDown"

import { useHistory, Link } from "react-router-dom";


const MainSlide = (props) => {
  let history = useHistory();
  return (
    <>
     <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="w-full h-64 bg-transparent bg-center bg-cover rounded-lg">
          <Image shape="big_square" src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg" />
          </div>

        <div className="w-56 -mt-10 overflow-hidden bg-white
        opacity-80 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <div className="absolute bottom-8 pl-4 hover:scale-110 cursor-pointer">
            <Image size="large" />
            </div>
            <h2 className="py-2 font-bold tracking-wide text-right mr-4 text-gray-800 uppercase dark:text-white">펭귄 님</h2>
            
            <div className="flex items-center justify-between px-3 py-1 bg-gray-100 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">UI / UX 디자인</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-800 rounded hover:bg-blue-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">FOLLOW</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default MainSlide;