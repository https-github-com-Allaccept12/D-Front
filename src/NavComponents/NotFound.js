import React from "react";
import { Button } from "../elements";

import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
    let navigate = useNavigate();
    return (
        <div className="flex flex-col p-3 justify-center items-center">
            <Button
                onClick={() => {
                    navigate(-1);
                }}
            >
                뒤로가기
            </Button>
        </div>
    );
};

export default NotFound;
