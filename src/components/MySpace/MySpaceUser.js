import React from "react";
import { Button, Image } from "../../elements";

import { useHistory } from "react-router-dom";


const MySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>

        
        <div className="col-start-2 col-span-3 justify-items-center items-center">
            <div className="flex justify-end">팔로잉 팔로워</div>
            
            <div className="flex flex-col items-center">
            <Image size="5xl" min="top" />
                <div className="ml-2">
                    
                    <div className="grid justify-items-center bg-blue-200 rounded-lg shadow-lg p-1">
                    <h3 className="text-xl text-gray-800 font-medium">펭귄 님</h3>
                    <span className="text-gray-600">UX/UI Designer</span>
                    <span className="text-gray-600">성향 : 라라라라</span>

                <div className="text-2xl p-1">
                <span>🐧</span> <span>🐧</span> <span>🐧</span> <span>🐧</span>
                </div>
                <p>한줄소개</p>
                <p>자기소개소개 자기소개소개 자기소개소개 자기소개소개 자기소개소개 자기소개소개
                소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개소개 </p>
                    </div>
                    
                </div>
            </div>

        </div>

<div>

        </div>


    </>

  );
};

export default MySpaceUser;