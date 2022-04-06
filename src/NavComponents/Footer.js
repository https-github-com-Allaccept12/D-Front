import React from "react";
import { Button, Text } from "../elements";

import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Foot = tw.div`
h-20 bg-dpurple-200 opacity-0 fixed hover:opacity-60 bottom-0 w-3/5 rounded-tr-full
transition ease-in-out delay-150 mx-auto
`;

const OutSide = tw.div`
fixed bottom-0 text-dpurple-300 p-5 animate-pulse
`;

const SpBtn = tw.button`
font-min1 text-tiny md:text-base text-white rounded-full hover:bg-dpurple-300 p-2 
`;
const Footer = (props) => {
    let navigate = useNavigate();

    return (
        <>
            <OutSide>
                <Text size="2">
                    재밌게 구경하시고 있나요? <br />
                    여기에 의견을 남겨주세요!
                </Text>
            </OutSide>
            <Foot>
                <div className="flex flex-row p-3 justify-center items-center gap-3">
                    <SpBtn
                        size="3"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        뒤로가기
                    </SpBtn>

                    <SpBtn
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        설문조사 제출하고
                        <br className="md:hidden" /> 스타벅스 커피받기☕
                    </SpBtn>
                </div>
            </Foot>
        </>
    );
};

export default Footer;
