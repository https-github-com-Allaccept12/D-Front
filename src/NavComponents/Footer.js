import React from "react";
import { Button } from "../elements";

import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Foot = tw.div`
h-20 bg-dpurple-200 opacity-0 fixed hover:opacity-70 bottom-0 w-full
transition ease-in-out delay-150 
`;
const Footer = (props) => {
    let navigate = useNavigate();
    return (
        <>
            <Foot>
                <div className="flex flex-row p-3 justify-center items-center">
                    <Button
                        size="3"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        뒤로가기
                    </Button>
                    <Button
                        size="3"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        설문조사 제출하고 커피받기
                    </Button>
                </div>
            </Foot>
        </>
    );
};

export default Footer;
