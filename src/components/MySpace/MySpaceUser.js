import React from "react";
import { Button, Image, Profile, Icon } from "../../elements";

import { useHistory } from "react-router-dom";


const MySpaceUser = (props) => {
  let history = useHistory();
  return (
    <>

        
        <div className="col-start-2 col-span-3 justify-items-center items-center">
            <div className="flex justify-end">팔로잉 팔로워</div>
            
            <div className="flex flex-col items-center -mt-28">
            <Profile size="1" />
                <div className="ml-2">
                    
                    <div className="grid justify-items-center rounded-lg p-1">
                    <h3 className="text-xl font-minB text-gray-800 font-medium">펭귄 님</h3>
                    <span className="text-gray-600 text-sm font-minB">UX/UI Designer</span>
                    <Button size="3"><span className="text-xs font-min-2"> INTP </span></Button>

                <div className="text-2xl p-1 flex flex-row">
                <Icon name="Time" iconSize="32" />
                <Icon name="Talk" iconSize="32" />
                <Icon name="Link" iconSize="32" />
                <Icon name="Edit" iconSize="32" />
                </div>

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