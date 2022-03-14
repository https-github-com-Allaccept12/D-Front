import React from "react";
import { Button, Image } from "../../elements";

import { useHistory, Link } from "react-router-dom";
import DimoDetail from "../Details/DimoDetail";


const DimoWork = (props) => {
  let history = useHistory();
  return (
    <>
    <div className="w-full">
      <div>
     
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
     <Link to="/dimodetail"><p>답변하러 가기</p></Link>
     <Link to="/dimoqnadetail"><p>dimoqna</p></Link>
     
      </div>
    
        
    </div>
    </div>


    </>
  );
};

export default DimoWork;
