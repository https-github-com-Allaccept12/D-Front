import React from "react";
import { Button, Image, Container } from "../../elements";

import { useHistory } from "react-router-dom";


const MySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>

        
        <div className="flex flex-col justify-center items-center">
         <Container size="large">
       
        </Container>   
        <Image size="5xl" min="top" />
            <div className="flex flex-col items-center">
                
                <div className="ml-2">
                    
                    <div className="flex flex-col px-28 p-2 shadow-lg rounded-2xl font-sanss2">
                    <h3 className="text-xl text-gray-800 font-medium">펭귄 님</h3>
                    <span className="text-gray-600">UX/UI Designer</span>
                    <span className="text-gray-600">성향 : 라라라라</span>

                <div className="flex flex-row justify-center text-2xl">
                <span>🐧</span> <span>🐧</span> <span>🐧</span> <span>🐧</span>
                </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-2 sm:mt-0">
                
            </div>
        </div>
        <div className="flex justify-between items-center mt-4">

        </div>
<div>

        </div>


    </>

  );
};

export default MySpaceUser;