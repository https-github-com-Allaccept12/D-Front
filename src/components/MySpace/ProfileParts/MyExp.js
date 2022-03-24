import React from "react";
import { Button, Image, Container } from "../../../elements";

import { useHistory } from "react-router-dom";


const MyExp = (props) => {
  let history = useHistory();
  return (
    <>

        <div className="grid">

        <div>EXPERIENCE 총 1년</div>
        <hr className="w-full border-4" /> 
        
        <ol className="grid grid-cols-3 border-l border-gray-200 dark:border-gray-700 mb-10">         

    <li className="mb-10 ml-4 row-start-1">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">회사 이름</h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022~03 재직중</time>
        
    </li>
    <li className="mb-10 ml-4 row-start-1 col-start-2">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">직책 / 부서</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">부서 1</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">직책 1</p>
    </li>

    <li className="mb-10 ml-4 row-start-2">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">회사 이름</h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022~03 재직중</time>
        
    </li>
    <li className="mb-10 ml-4 row-start-2 col-start-2">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">직책 / 부서</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">부서 1</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">직책 1</p>
    </li>


    
</ol>
</div>



    </>

  );
};

export default MyExp;